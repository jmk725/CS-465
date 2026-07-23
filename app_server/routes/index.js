var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/travlr');

/* GET home page. */
router.get('/', ctrlMain.travel);

module.exports = router;