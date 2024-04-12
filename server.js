const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/budget_tracker', { useNewUrlParser: true, useUnifiedTopology: true });

const transactionSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    date: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    const transactions = await Transaction.find();
    res.render('index', { transactions: transactions });
});

app.listen(3000, () => console.log('Server started on port 3000'));

