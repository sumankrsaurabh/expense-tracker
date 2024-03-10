const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    product:{
        type: String,
    },
    amount:{
        type:Number
    },
    mode:{
        type:Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Expense = mongoose.model('Expense', expenseSchema);
