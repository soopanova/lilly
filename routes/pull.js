var express = require('express');
var router = express.Router();
var url = require('url');
var nano = require('nano')('http://localhost:5984');
var db_name = "lilly";
var db = nano.use(db_name);	

/* GET users listing. 
router.get('/', function(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log(pathname);
});
*/

router.use(function(req, res, next) {
	//console.log('%s %s %s', req.method, req.url, req.path);
	console.log('%s', req.method);
	console.log('%s', req.url);
	console.log('%s', req.path);
	next();
});


module.exports = router;