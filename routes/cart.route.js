var express = require('express');
var router = express.Router();
var controller = require('../controllers/cart.controller');

router.get('/add_cart/:idsp', controller.add_cart);


module.exports = router;