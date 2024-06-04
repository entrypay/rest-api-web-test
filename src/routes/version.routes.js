const express = require("express");
const router = express.Router();
const versionController = require('../controllers/versionController');

router.get("/", versionController.allVersion)


module.exports = router;
