var express = require('express');
var router = express.Router();
var registerInitialChecks = require('../Middlewares/registerChecks');
var register = require("../Controllers/register");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*email validate - String
passoword validate
Js/sql - Tha 
check if email already exists
pasword hash 
email lowercase
save*/

router.post('/register',registerInitialChecks,register);
module.exports = router;
