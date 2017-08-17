'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/questionController')
const middleware = require('../helpers/auth')

router.get('/', controller.getAllQuestion)
router.get('/:id', controller.getOneQuestion)
router.post('/', middleware.auth, controller.createQuestion)
router.post('/:id/answer', middleware.auth, controller.addAnswer)
router.put('/:id/:iduser', middleware.auth, controller.voteQuestion)
router.delete('/:id', controller.deleteQuestion)
router.put('/:id/:iduser/:idanswer', controller.voteAnswer)

module.exports = router;
