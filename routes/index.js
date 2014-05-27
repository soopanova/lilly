var express = require('express');
var router = express.Router();
var nano = require('nano')('http://localhost:5984');
var db_name = "lilly";
var db = nano.use(db_name);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
	var name = req.body.fname;
	var shorturl = Math.random().toString(36).slice(-8);
	

	// html = "<a href='" + name + "'> http://lil.ly/"+ shorturl + "</a>" +
	// 		"<br> <a href=http://localhost:3000> Back </a>";
	// res.send(html);

	id = '"_id": "'+shorturl+'"';
	console.log(id);

	longu = '"longURL": "' + name + '"';
	console.log(longu);

	//var twoSlash = "\\\\";
	//console.log(twoSlash);
	
	shortu = '"shortURL": "http://lil.ly/' + shorturl + '"';
	console.log(shortu);

	json = '{' + id + ',' + longu + ',' + shortu + '}';
	console.log(json);

	//------Inserting new record
	/*
	db.insert(json, function(err, body){
		if(err)
			console.log("something went wrong: " + err);
	});*/
	
	
	/* ------Get a record
	/*couch.get('lilly', 'd82a40cd04f1d4064856c40c7d000906', function(err, resData) {
		if(err)
			return console.error(err);
		console.dir(resData);
	});*/
});

module.exports = router;
