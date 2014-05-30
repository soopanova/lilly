var express = require('express');
var router = express.Router();
var url = require('url');

/* GET users listing. */
router.get('/', function(req, res) {
  url.parse(req)
});

module.exports = router;