import * as authServices from "../services/authService.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request data
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Call the service
    const result = await authServices.login(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: result,
    });
  } catch (error) {
    if (error.message === "INVALID_CREDENTIALS") {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    if (error.message === "ACCOUNT_INACTIVE") {
      return res.status(403).json({
        success: false,
        message: "This account is inactive.",
      });
    }

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};