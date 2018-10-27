var express = require('express');
var app = express();
var port = 3000;
var GioHang = require('./controllers/cart.js');
var adminRouter = require('./routes/admin.route');

var homeRouter = require('./routes/home.route');
var cartRouter = require('./routes/cart.route');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
mongoose.connect('mongodb://localhost/WebBanHang',{ useNewUrlParser: true });
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));



app.use(session({
  secret: 'ngohung',
  resave: true,
  saveUninitialized: true
}));

app.use(function(req, res, next){
	if(!req.session.cart){
		res.locals.sl = 0;
	}else{
		var giohang = new GioHang(req.session.cart);
		var cart = giohang.getcart();
		console.log(cart);
		var soluong = cart.reduce(function(a, b){
			return a + b.soluong;
		},0);
		console.log(soluong);
	}
	res.locals.sl = soluong;
	next();
});
app.use('/admin', adminRouter);
app.use('/cart', cartRouter);
app.use('/',homeRouter);
app.listen(port,function(){
	//console.log('port : ' + port);
});