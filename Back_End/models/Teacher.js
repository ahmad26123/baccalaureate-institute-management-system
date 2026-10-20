import mongoose from "mongoose";

const { Schema } = mongoose;

const teacherSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    specialization: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
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

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;

