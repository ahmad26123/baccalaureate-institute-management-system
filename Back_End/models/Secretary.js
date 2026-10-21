import mongoose from "mongoose";

const { Schema } = mongoose;

const secretarySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    contractStartDate: {
        type: Date,
        required: true
    },
    contractEndDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "terminated"],
        default: "active"
    }
}, {
    timestamps: true
});

const Secretary = mongoose.model("Secretary", secretarySchema);

export default Secretary;
