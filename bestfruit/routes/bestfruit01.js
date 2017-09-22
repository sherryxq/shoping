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
	const nodemailer = require('nodemailer');
	
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	nodemailer.createTestAccount((err, account) => {
	
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: 'smtp.exmail.qq.com',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: 'qinyunchuan@bestfruit.me', // generated ethereal user
				pass: 'arm922t'  // generated ethereal password
			}
		});
	
		// setup email data with unicode symbols
		let mailOptions = {
			from: '"yunchuan" <qinyunchuan@bestfruit.me>', // sender address
			to: '"yunchuan" <yunchuanqin@qq.com>, sherryxq@foxmail.com', // list of receivers
			subject: '订单提醒 ✔', // Subject line
			text: '你有一个新订单！', // plain text body
			html: '<b>你有一个新订单！</b>' // html body
		};
	
		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	
			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		});
	});
	res.send('complete');
});

module.exports = router;