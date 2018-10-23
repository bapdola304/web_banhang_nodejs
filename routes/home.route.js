var express = require('express');
var router = express.Router();
var controller = require('../controllers/home.controller');

var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });
router.get('/',controller.home);

router.get('/chitietsp/:idsp',controller.chitietsp);





module.exports = router;