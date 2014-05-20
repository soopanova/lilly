var express = require('express');
var router = express.Router();
var nodeCouchDB = require('node-couchdb');
var couch = new nodeCouchDB('localhost', 5984);

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

	
	/* ------Get a record
	couch.get('lilly', 'd82a40cd04f1d4064856c40c7d000906', function(err, resData) {
		if(err)
			return console.error(err);
		console.dir(resData);
	});*/

	


});

module.exports = router;
