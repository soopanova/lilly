var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
	var name = req.body.fname;
	var shorturl = Math.random().toString(36).slice(-8);

	html = "<a href='" + name + "'> http://lil.ly/"+ shorturl + "</a>" +
			"<br> <a href=http://localhost:3000> Back </a>";
	res.send(html);

});

module.exports = router;
