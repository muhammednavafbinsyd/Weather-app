var express = require('express');
var router = express.Router();
const userController =  require('../controller/user')

router.post('/createuser',userController.createUser)
router.post('/login',userController.login)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





module.exports = router;
