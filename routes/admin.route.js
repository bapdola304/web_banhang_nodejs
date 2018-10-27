var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin.controller');

var multer  = require('multer');
// var upload = multer({ dest: 'public/uploads/' });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage })

router.get('/',controller.index);

router.post('/addSanPham', upload.single('anhsp'), controller.addSanPham);

router.get('/xoaSanPham/:id', controller.xoaSanPham);

router.post('/editSanPham/:id', upload.single('anhsp'), controller.editSanPham);


module.exports = router;