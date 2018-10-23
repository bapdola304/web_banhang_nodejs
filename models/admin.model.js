var mongoose = require('mongoose');
var admin = new mongoose.Schema({
	tensp : String,
	gia : Number,
	anhsp : String,
	masp : String
});

var adminsp = mongoose.model('admin', admin, 'SanPham');
 module.exports = adminsp;