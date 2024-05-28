const Transaction = require('../models/Transaction');

const addTransaction = async (req, res) => {
  try {
    const transaction = new Transaction({ ...req.body, userId: req.user._id });
    await transaction.save();
    res.status(201).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id });
    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!transaction) {
      return res.status(404).send();
    }
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!transaction) {
      return res.status(404).send();
    }
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addTransaction, getTransactions, updateTransaction, deleteTransaction };
