var express = require('express');
var router = express.Router();

const https = require('https');
const fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('message', { title: 'Express message' });
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('message', { title: 'Express message '+req.params.id });
});

module.exports = router;
