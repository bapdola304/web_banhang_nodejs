var userModel = require("../models/user.model");

module.exports.login = (req, res) =>{
	res.render("template/login",{errors : ""});
}

module.exports.register = (req, res) =>{
	res.render("template/register",{errors : ""});
}

module.exports.postRegister = async (req, res) =>{

	var username = req.body.username;
	console.log(username);
	var user = await userModel.find({ username : username });

	if(user.length > 0){
		console.log('ton tai');
		res.render("template/register",{errors : ['tài khoản đã tồn tại'] });
		return;
	}

	var user = new userModel(req.body);
	user.save();
	res.redirect("/user/register");
}
module.exports.postLogin = async (req, res) =>{
	var username = req.body.username;
	var password = req.body.password;

	var user = await userModel.find({username : username});
	var pass = await userModel.find({ password: password});
	if(user.length > 0){
		if(pass.length >0 ){
			req.session.user = username;
			console.log(req.session.user);
			res.redirect("/");
		}else{
			res.render("template/login",{errors : ['password không chính xác!']});
		}
	}else{
		res.render("template/login",{errors : ['username không tồn tại']});
	}

}
module.exports.logout = (req, res) =>{
	req.session.destroy();
	res.redirect("/");
}