const express = require('express')
const router = express.Router();
const controller = require('../controller/questionController')

//questions
router.get('/', controller.findAllQuestion)
router.post('/', controller.createQuestion)
router.get('/:id', controller.findByIdQuestion)
router.put('/:id', controller.updateQuestion)
router.delete('/:id', controller.deleteQuestion)

// answers
router.get('/:id/answers', controller.findAnswers)
router.post('/:id/answers', controller.createAnswer)


module.exports = router
