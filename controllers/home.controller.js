 
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
 	var sp1trang = 5;
 	var trang = parseInt(req.query.trang) || 1;
 	var start = (trang - 1)*sp1trang;
 	var end = sp1trang * trang;
 	var array_sp = await sp.find({masp : masp});

 	var spm = array_sp.slice(start,end);
 	console.log(spm);
 	var tongsp = array_sp.length;
 	var sotrang =Math.ceil(tongsp/sp1trang);
 	// console.log(sotrang);
 	res.render('template/xemthem_sp',{spm : spm, sotrang : sotrang, masp : masp})
 }