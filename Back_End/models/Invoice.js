import mongoose from "mongoose";

const { Schema } = mongoose;

const invoiceSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: "Parent",
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paidAmount: {
        type: Number,
        default: 0
    },
    remainingAmount: {
        type: Number,
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["paid", "partial", "unpaid"],
        default: "unpaid"
    }
}, {
    timestamps: true
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
