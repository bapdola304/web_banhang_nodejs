var mongoose = require('mongoose');
var user = new mongoose.Schema({
	name : String,
	username : String,
	password : String
});

var user = mongoose.model('user', user, 'User');
 module.exports = user;