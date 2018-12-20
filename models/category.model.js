var mongoose = require('mongoose');
var category = new mongoose.Schema({
	category : String,
	id_tl : String,
});

var category = mongoose.model('category', category, 'Category');
 module.exports = category;