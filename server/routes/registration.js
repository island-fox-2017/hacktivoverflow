var express = require('express')
var router = express.Router();
var controller = require('../controller/registrationController')

router.post('/signin', controller.signin)
router.post('/signup', controller.signup)
router.get('/all', controller.getAllUser)

module.exports = router
