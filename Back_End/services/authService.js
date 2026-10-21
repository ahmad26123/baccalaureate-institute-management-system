import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const login = async (email, password) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured.");
  }

  const normalizedEmail = email.trim().toLowerCase();

  // Find the user and include the password hash
  const user = await User.findOne({
    email: normalizedEmail,
  }).select("+password");

  // Check if the user exists
  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  // Check if the account is active
  if (!user.isActive) {
    throw new Error("ACCOUNT_INACTIVE");
  }

  // Compare the entered password with the stored hash
  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("INVALID_CREDENTIALS");
  }

  // Generate JWT
  const token = jwt.sign(
    {
      userId: user._id.toString(),
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    }
  );

  // Return safe user data
  return {
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  };
};