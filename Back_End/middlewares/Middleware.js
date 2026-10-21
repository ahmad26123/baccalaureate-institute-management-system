import mongoose from "mongoose";

// Handle errors from asynchronous controllers
export const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

// Handle routes that do not exist
export const notFound = (req, res, next) => {
    const error = new Error(
        `Route not found: ${req.method} ${req.originalUrl}`
    );

    error.statusCode = 404;

    next(error);
};

// Handle application errors
export const errorHandler = (err, req, res, next) => {
    // If the response has already started, let Express handle it
    if (res.headersSent) {
        return next(err);
    }

    let statusCode = Number(err.statusCode || err.status) || 500;
    let message = err.message || "Internal Server Error";
    let errors;

    // 1. Mongoose validation errors
    if (err instanceof mongoose.Error.ValidationError) {
        statusCode = 400;
        message = "Validation failed";

        errors = Object.values(err.errors).map((item) => ({
            field: item.path,
            message: item.message
        }));
    }

    // 2. Invalid MongoDB ObjectId or invalid cast
    else if (err instanceof mongoose.Error.CastError) {
        statusCode = 400;
        message = `Invalid value for field: ${err.path}`;
    }

    // 3. Duplicate values, such as username or email
    else if (err.code === 11000) {
        statusCode = 409;

        const fields = Object.keys(err.keyValue || {});

        message = fields.length
            ? `Duplicate value for field: ${fields.join(", ")}`
            : "A record with this value already exists";
    }

    // 4. Invalid JSON request body
    else if (
        err.type === "entity.parse.failed" ||
        (err instanceof SyntaxError && err.status === 400)
    ) {
        statusCode = 400;
        message = "Invalid JSON request body";
    }

    // 5. Request body is too large
    else if (err.type === "entity.too.large") {
        statusCode = 413;
        message = "Request body is too large";
    }

    // 6. Authentication errors (JWT, if used by the project)
    else if (
        err.name === "JsonWebTokenError" ||
        err.name === "TokenExpiredError" ||
        err.name === "NotBeforeError"
    ) {
        statusCode = 401;
        message = "Invalid or expired authentication token";
    }

    // 7. Authentication or permission errors
    else if (statusCode === 401) {
        message = "Authentication required";
    } else if (statusCode === 403) {
        message = "You do not have permission to perform this action";
    }

    // 8. Database connection or network errors
    else if (
        err.name === "MongoServerSelectionError" ||
        err.name === "MongoNetworkError" ||
        err.name === "MongoNetworkTimeoutError"
    ) {
        statusCode = 503;
        message = "Database service is temporarily unavailable";
    }

    // 9. Invalid status codes should not be sent to the client
    if (statusCode < 400 || statusCode > 599) {
        statusCode = 500;
    }

    // 10. Hide internal error details in production
    if (statusCode >= 500) {
        console.error(err);

        if (process.env.NODE_ENV === "production") {
            message = "Internal Server Error";
        }
    }

    const response = {
        success: false,
        message
    };

    if (errors) {
        response.errors = errors;
    }

    res.status(statusCode).json(response);
};
