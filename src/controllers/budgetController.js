const Budget = require('../models/Budget');

const addBudget = async (req, res) => {
  try {
    const budget = new Budget({ ...req.body, userId: req.user._id });
    await budget.save();
    res.status(201).send(budget);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ userId: req.user._id });
    res.send(budgets);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!budget) {
      return res.status(404).send();
    }
    res.send(budget);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!budget) {
      return res.status(404).send();
    }
    res.send(budget);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addBudget, getBudgets, updateBudget, deleteBudget };
