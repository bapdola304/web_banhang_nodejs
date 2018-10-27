
var sp = require('../models/admin.model');



module.exports.index = async function(req, res){
	var SanPham = await sp.find().sort({ _id: 'desc' });
	res.render('admin/masterlayout',{SanPham : SanPham});
}

module.exports.addSanPham = function(req, res){

	req.body.gia = parseInt(req.body.gia);
	req.body.anhsp = req.file.destination.split('/').slice(1)+ '/' + req.file.originalname ;
	console.log(req.body.anhsp);
	console.log(req.file.originalname);
	var sanpham = new sp(req.body);
	sanpham.save();

	res.redirect('/admin');
}

module.exports.xoaSanPham = async function(req, res){
	var id = req.params.id;
	await sp.deleteOne({_id : id});
	res.redirect('/admin');
}

module.exports.editSanPham = async (req, res) =>{
	var id = req.params.id;

	if(req.file === undefined){
		await sp.updateOne({_id : id},{
			tensp : req.body.tensp,
			gia : req.body.gia,
			masp : req.body.masp
		});
		console.log(req.body.anhsp);
	}else{
			var anhsp = req.body.anhsp = req.file.path.split('/').slice(1).join('/');
			await sp.updateOne({_id : id},{
				tensp : req.body.tensp,
				gia : req.body.gia,
				masp : req.body.masp,
				anhsp : anhsp
			});
			console.log(req.body.anhsp);
	}
	res.redirect('/admin');
}