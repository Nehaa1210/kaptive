const express = require('express');
const { addBudget, getBudgets, updateBudget, deleteBudget } = require('../controllers/budgetController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, addBudget);
router.get('/', auth, getBudgets);
router.patch('/:id', auth, updateBudget);
router.delete('/:id', auth, deleteBudget);

module.exports = router;
