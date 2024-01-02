var express = require('express');
var router = express.Router();
var colorController = require('../controllers/color');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/colors', colorController.show );
router.post('/colors', colorController.selectData);


router.post('/color',colorController.getData);


module.exports = router;
