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

	id = '"_id": "'+shorturl+'"';
	//console.log(id);

	longu = '"longURL": "' + name + '"';
	//console.log(longu);
	
	shortu = '"shortURL": "http://lil.ly/' + shorturl + '"';
	//console.log(shortu);

	//creating JSON type string the converting it to actual JSON
	json_type = '{' + id + ',' + longu + ',' + shortu + '}';
	json_object = eval("(" + json_type + ")");
	//console.log(json_object);

	//------Inserting new record
	
	db.insert(json_object, shorturl, function(err, body){
		if(err)
			console.log("something went wrong: " + err);
	});

	html = "<a href='" + name + "'> http://lil.ly/"+ shorturl + "</a>" +
	 		"<br> <a href=http://localhost:3000> Back </a>";
	 res.send(html);
	
});

module.exports = router;
