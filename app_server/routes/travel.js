var express = require('express');
var router = express.Router();

const ctrlTravel = require('../controllers/travlr');

router.get('/', ctrlTravel.travel);

module.exports = router;