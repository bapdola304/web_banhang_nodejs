var express = require("express");
var router = express.Router();
var controller = require('../controllers/user.controller');

router.get('/login', controller.login);

router.get('/register', controller.register);

router.post('/postRegister', controller.postRegister);

router.post('/postLogin', controller.postLogin);

router.get('/logout', controller.logout);

module.exports = router;