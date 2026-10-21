import mongoose from "mongoose";

const { Schema } = mongoose;

<<<<<<< HEAD
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "secretary", "teacher", "student", "parent"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);
=======
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "secretary", "teacher", "student", "parent"]
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
>>>>>>> 941a982fa0e00a5ea4d70398cdec3d85d7e0a9fe

const User = mongoose.model("User", userSchema);

export default User;
