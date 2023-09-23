const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    ammount: {
        type: Number,
        required: [true, 'ammount is required']
    },
    type: {
        type: String,
        required: [true, 'type is required']
    },
    category: {
        type: String,
        required: [true, 'category is required']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Desc is required']
    },
    date: {
        type: Date,
        required: [true, 'date is required']
    },
}, { timestamps: true });

const transactionModel = mongoose.model('transactions', transactionSchema);
module.exports = transactionModel;