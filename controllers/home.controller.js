 
var sp = require('../models/admin.model');

 module.exports.home = async function(req, res){
 	var sanphammoi = await sp.find().where({ masp: 'SPM' });

 	var sanphambc = await sp.find().where({ masp: 'SPBC' });

 	var sanphamsale = await sp.find().where({ masp: 'SPS' });
 	res.render('template/index',{spm : sanphammoi,spbc : sanphambc, sps : sanphamsale});
 }

  module.exports.chitietsp = async function(req, res){
  	var idsp = req.params.idsp;
  	var sanpham = await sp.find({_id : idsp});
 	res.render('template/chitietsp',{sp : sanpham});
 }
 module.exports.xemthem = async (req, res) =>{
 	var masp = req.params.masp;
 	var spm = await sp.find({masp : masp});
 	res.render('template/xemthem_sp',{spm : spm})
 }