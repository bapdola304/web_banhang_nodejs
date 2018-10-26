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