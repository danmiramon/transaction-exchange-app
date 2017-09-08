import * as mongoose from 'mongoose';

interface ITransaction extends mongoose.Document {
    date: Date;
    reference: string;
    amount: number;
}

let TransactionSchema: mongoose.Schema = new mongoose.Schema({
    date: {type: Date},
    reference: {type: String},
    amount: {type: Number}
});

export let Transaction: mongoose.Model<ITransaction> =  mongoose.model<ITransaction>('Transaction', TransactionSchema);