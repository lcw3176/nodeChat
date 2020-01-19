var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/confirm', function(req, res, next){
  var id = req.body.id;
  res.render('chat', {data:id});
});

module.exports = router;
