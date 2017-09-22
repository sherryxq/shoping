var express = require('express');
var router = express.Router();

var OAuth = require('wechat-oauth');
var client = new OAuth('wx524eb57d72f38744', '9650fa2f7a7b96ded9c148a9cd476617');
var url = client.getAuthorizeURL('http://www.bestfruit.me/bf/callback', 'state', 'snsapi_base');

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.session.openid='freasy';
	res.redirect(url);
	//console.log(url);
});

/* GET home page. */
router.get('/callback', function(req, res, next) {
	//res.session.openid='freasy';
	var code = req.query.code;
	console.dir(code);
	client.getAccessToken(code,function(err,result)
	{
		var openid = result.data.openid;
		var now=new Date();
		console.log(now.toLocaleDateString()+now.toLocaleTimeString()+"openid:"+openid);
		res.redirect('/front');
	});
	
});

router.get('/order',function(req,res,next){
	var email 	= require("emailjs/email");
	var server 	= email.server.connect({
	   user:    "qinyunchuan", 
	   password:"arm922t", 
	   host:    "smtp.exmail.qq.com", 
	   ssl:     true
	});
	
	server.send({
	   text:    "i hope this works", 
	   from:    "you <yunchuan@qq.com>", 
	   to:      "sherryxq <sherryxq@qq.com>, yunchuan <yunchuanqin@qq.com>",
	   subject: "testing emailjs"
	}, function(err, message) { console.log(err || message); });
	res.send('complete');
});

module.exports = router;