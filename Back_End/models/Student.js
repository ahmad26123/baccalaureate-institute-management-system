import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: "Parent",
        required: true
    },
    classSectionId: {
        type: Schema.Types.ObjectId,
        ref: "ClassSection"
    },
    branch: {
        type: String,
        required: true,
        enum: ["scientific", "literary", "vocational"]
    },
    status: {
        type: String,
        required: true,
        enum: ["active", "withdrawn", "expelled", "graduated"],
        default: "active"
    }
}, {
    timestamps: true
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
