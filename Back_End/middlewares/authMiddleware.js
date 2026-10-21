import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if the token exists
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Token is missing.",
      });
    }

    // Extract Bearer token
    const [scheme, token, ...extraParts] = authHeader.split(" ");

    if (
      scheme !== "Bearer" ||
      !token ||
      extraParts.length > 0
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization header format.",
      });
    }

    if (!process.env.JWT_SECRET) {
      return next(new Error("JWT_SECRET is not configured."));
    }

    // Verify the token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find the user in the database
    const user = await User.findById(decoded.userId);

    // Check if the account exists and is active
    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "User not found or account is inactive.",
      });
    }

    // Attach user data to the request
    req.user = {
      userId: user._id.toString(),
      role: user.role,
    };

    next();
  } catch (error) {
    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError" ||
      error.name === "NotBeforeError"
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token.",
      });
    }

    next(error);
  }
};

export default authMiddleware;