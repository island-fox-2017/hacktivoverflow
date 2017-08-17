const express = require('express');
const router = express.Router();
const userCont = require('../controllers/userController');
const authCont = require('../controllers/authController')

router.get('/', userCont.getAllUsers)
router.post('/', userCont.createNewUser)
router.put('/:id', authCont.authUser, userCont.updateSpecifiedUser)
router.delete('/:id', authCont.authUser, userCont.removeSpecifiedUser)

module.exports = router;
