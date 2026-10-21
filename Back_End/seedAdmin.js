import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/User.js"; // عدّل المسار/الاسم حسب ملفك (User.js أو Users.js)

const run = async () => {
  await mongoose.connect(process.env.DB_URI);

  const exists = await User.findOne({ email: "admin@test.com" });
  if (exists) {
    console.log("Admin already exists");
    return process.exit(0);
  }

  const hashed = await bcrypt.hash("Admin@12345", 10);

  await User.create({
    username: "admin",
    email: "admin@test.com",
    password: hashed,
    role: "admin",
  });

  console.log("Admin created: admin@test.com / Admin@12345");
  process.exit(0);
};

run().catch((err) => {
  console.error(err.message);
  process.exit(1);
});