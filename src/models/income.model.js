import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    source: {
        type: String,
    },
    amount: {
        type: Number
    },
    mode: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
);

export const Income = mongoose.model("Income", incomeSchema);
