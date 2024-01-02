var express = require('express');
var router = express.Router();
var colorController = require('../controllers/color');

router.post('/colors', colorController.selectData );


module.exports = router;
