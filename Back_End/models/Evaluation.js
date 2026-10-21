import mongoose from "mongoose";

const { Schema } = mongoose;

const evaluationSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        required: true
    },
    grade: {
        type: Number
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    notes: {
        type: String
    },
    updatedReason: {
        type: String
    },
    type: {
        type: String,
        required: true,
        enum: ["teacher_to_student", "student_to_teacher"]
    }
}, {
    timestamps: true
});

const Evaluation = mongoose.model("Evaluation", evaluationSchema);

export default Evaluation;
