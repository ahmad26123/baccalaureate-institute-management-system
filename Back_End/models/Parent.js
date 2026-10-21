import mongoose from "mongoose";

const { Schema } = mongoose;

const parentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    relationship: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Parent = mongoose.model("Parent", parentSchema);

export default Parent;
