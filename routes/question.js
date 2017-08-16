'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/questionController')

router.get('/', controller.getAllQuestion)
router.get('/:id', controller.getOneQuestion)
router.post('/', controller.createQuestion)
router.post('/:id/answer', controller.addAnswer)
router.put('/:id/:iduser', controller.voteQuestion)

module.exports = router;
