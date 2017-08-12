'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/questionController')

router.get('/', controller.getAllQuestion)
router.post('/', controller.createQuestion)

module.exports = router;
