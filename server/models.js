"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var TransactionSchema = new mongoose.Schema({
    date: { type: Date },
    reference: { type: String },
    amount: { type: Number }
});
exports.Transaction = mongoose.model('Transaction', TransactionSchema);
