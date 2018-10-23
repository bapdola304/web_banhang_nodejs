var express = require('express');
var app = express();
var port = 3000;

var adminRouter = require('./routes/admin.route');

var homeRouter = require('./routes/home.route');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/WebBanHang');


app.use('/admin', adminRouter);

app.use('/',homeRouter)

app.listen(port,function(){
	//console.log('port : ' + port);
});