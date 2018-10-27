var express = require('express');
var router = express.Router();
var controller = require('../controllers/home.controller');

router.get('/',controller.home);

router.get('/chitietsp/:idsp',controller.chitietsp);





module.exports = router;