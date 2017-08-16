const express = require('express');
const router = express.Router();
const userCont = require('../controllers/userController');

router.get('/', userCont.getAllUsers)

router.post('/', userCont.createNewUser)

router.put('/:id', userCont.updateSpecifiedUser)

router.delete('/:id', userCont.removeSpecifiedUser)

module.exports = router;
