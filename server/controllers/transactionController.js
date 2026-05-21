const Transaction = require('../models/Transaction');
const { Parser } = require('json2csv');

exports.addTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create({
            ...req.body,
            userId: req.user.id
        });

        res.json(transaction);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            userId: req.user.id
        });

        res.json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.exportCSV = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            userId: req.user.id
        });

        const fields = ['type', 'category', 'amount', 'description'];
        const parser = new Parser({ fields });
        const csv = parser.parse(transactions);

        res.header('Content-Type', 'text/csv');
        res.attachment('transactions.csv');
        return res.send(csv);
    } catch (error) {
        res.status(500).json(error);
    }
}