var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
          // Build a fake url so we can get the search parameters using a URL object
          fake_url = "https://fake.com/path" + req.url
          const url = new URL(fake_url)
          const search_params = url.searchParams
    
          var x = Math.random();
    
    
          if (search_params.get("x")) {
            x= search_params.get("x");}
   
    var pow = Math.pow(x);
    var sign = Math.sign(x) 
    var tanh = Math.tanh(x) 
    var trunc = Math.trunc(x)
  res.render('computation', { title: 'Express',x:x,pow:pow,sign:sign,tanh:tanh,trunc:trunc });
  
});

module.exports = router;