import mongoose from "mongoose";

const { Schema } = mongoose;

const classSectionSchema = new Schema({
    sectionNumber: {
        type: Number,
        required: true
    },
    teacherIds: [{
        type: Schema.Types.ObjectId,
        ref: "Teacher"
    }],
    studentIds: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ClassSection = mongoose.model("ClassSection", classSectionSchema);

export default ClassSection;
