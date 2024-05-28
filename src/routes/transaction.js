const express = require('express');
const { addTransaction, getTransactions, updateTransaction, deleteTransaction } = require('../controllers/transactionController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, addTransaction);
router.get('/', auth, getTransactions);
router.patch('/:id', auth, updateTransaction);
router.delete('/:id', auth, deleteTransaction);

module.exports = router;
