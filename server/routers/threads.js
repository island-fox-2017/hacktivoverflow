const express = require('express');
const router = express.Router();
const threadCont = require('../controllers/threadController');
const responseCont = require('../controllers/responseController');
const authCont = require('../controllers/authController')

router.get('/', threadCont.get)
router.get('/:id/replies', threadCont.getOne)
router.get('/:id/reply', responseCont.get)
router.get('/:id/reply/:repid', responseCont.getOne)
router.post('/', authCont.userInfo, threadCont.create)
router.post('/:id/reply', authCont.userInfo, responseCont.create)
router.put('/:id', authCont.userInfo, threadCont.update)
router.put('/:id/reply/:repid', authCont.userInfo, responseCont.update)
router.put('/:id/upvote', authCont.userInfo, threadCont.upvote)
router.put('/:id/reply/:repid/upvote', authCont.userInfo, responseCont.upvote)
router.put('/:id/downvote', authCont.userInfo, threadCont.downvote)
router.put('/:id/reply/:repid/downvote', authCont.userInfo, responseCont.downvote)
router.delete('/:id', threadCont.remove)
router.delete('/:id/reply/:repid', responseCont.remove)

module.exports = router;
