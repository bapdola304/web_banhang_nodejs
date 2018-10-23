 
var sp = require('../models/admin.model');

 module.exports.home = async function(req, res){
 	var sanphammoi = await sp.find().where({ masp: 'SPM' });

 	var sanphambc = await sp.find().where({ masp: 'SPBC' });
 	res.render('template/index',{spm : sanphammoi,spbc : sanphambc});
 }

  module.exports.chitietsp = function(req, res){
 	res.render('template/chitietsp');
 }