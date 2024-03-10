const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    source:{
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

module.exports = mongoose.model('Income', incomeSchema);
