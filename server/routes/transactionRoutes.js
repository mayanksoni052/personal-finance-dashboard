const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const {
    addTransaction,
    getTransactions,
    exportCSV
} = require('../controllers/transactionController');

router.post('/', auth, addTransaction);
router.get('/', auth, getTransactions);
router.get('/export', auth, exportCSV);

module.exports = router;