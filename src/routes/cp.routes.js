const express = require('express')
const router = express.Router();
const cpController = require("../controllers/cpController");

router.get('/', cpController.allCp);




module.exports = router;
