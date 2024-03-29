import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    product: {
        type: String,
    },
    amount: {
        type: Number
    },
    mode: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


expenseSchema.pre("save", async function (next) {
    this.amount
    next()
})


export const Expense = mongoose.model('Expense', expenseSchema);
