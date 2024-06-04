const express = require('express')
const router = express.Router();
const quoteController = require('../controllers/quoteController')

router.get('/', quoteController.allQuote);
router.post('/', quoteController.insertQuote);



module.exports = router