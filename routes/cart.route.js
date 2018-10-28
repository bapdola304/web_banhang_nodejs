var express = require('express');
var router = express.Router();
var controller = require('../controllers/cart.controller');

router.get('/add_cart/:idsp', controller.add_cart);

router.get('/xemgiohang/', controller.xemgiohang);
router.get('/xoacart/:idsp', controller.xoacart);

router.post('/update_cart/:idsp', controller.update_cart);


module.exports = router;