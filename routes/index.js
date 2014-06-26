var express = require('express');
var router = express.Router();
var nano = require('nano')('http://localhost:5984');
var db_name = "lilly";
var db = nano.use(db_name);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* POST the shortURL and saving to the databae*/
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

router.get('/random', function(req, res){
	db.list(function(err, res){
		if(!err){
			res.rows.forEach(function(doc){
				console.log(doc.id);
			});
		}
	});
});

router.get('/([A-Za-z0-9]{8})', function(req, res){
	
	var urlRaw = req.url;
	var key  =  urlRaw.substr(1,8);
	
	//console.log(getURL(key, res));
	db.get(key,function(err, body){
		if(!err){
			console.log(body.longURL);
			res.writeHead(301, {Location: body.longURL});
			res.end();	
		}
		
		else if(err.message==='missing'){

			//console.log("Not in the database");
			res.render('nodb', { title: 'Express' });

		}
		else if(err){
			
			console.log("Something went wrong: " + err);
		}
		
	});

});


module.exports = router;
