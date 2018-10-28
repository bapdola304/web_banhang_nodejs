var GioHang = require('../controllers/cart.js');
var sp = require('../models/admin.model');

module.exports.add_cart = async function(req, res){
	var id = req.params.idsp;
	console.log(id);

	var giohang = new GioHang( (req.session.cart) ? req.session.cart : {items: {}} );
	
	var pd = await sp.findById(id);
	console.log(pd);
	giohang.add(id,pd);
	req.session.cart = giohang;
  
       console.log(req.session.cart);
       res.redirect('/chitietsp/'+id);
}

module.exports.xemgiohang = function(req, res){
	if(!req.session.cart){
		var sp = 1;
	}else{
	var giohang = new GioHang(req.session.cart);
	var sp = giohang.getcart();
	var tongtien = sp.reduce((a,b) =>  a + b.tongtien,0);
	console.log(tongtien);
}
	res.render('template/giohang',{sp : sp, tongtien : tongtien});
}
module.exports.xoacart = async (req, res) =>{
	var id = req.params.idsp;

	var giohang = new GioHang(req.session.cart);
	giohang.delCart(id);
	res.redirect('/cart/xemgiohang');
}

module.exports.update_cart = function(req, res){
	var id = req.params.idsp;
	var sl = req.body.soluong;
	var giohang = new GioHang(req.session.cart);
	giohang.updateCart(id,sl);
	res.redirect('/cart/xemgiohang');
}