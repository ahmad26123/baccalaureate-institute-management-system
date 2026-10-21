import mongoose from "mongoose";

const { Schema } = mongoose;

const archivedRecordSchema = new Schema({
    originalId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    entityType: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    archivedData: {
        type: Schema.Types.Mixed,
        required: true
    }
}, {
    timestamps: true
});

const ArchivedRecord = mongoose.model("ArchivedRecord", archivedRecordSchema);

export default ArchivedRecord;
