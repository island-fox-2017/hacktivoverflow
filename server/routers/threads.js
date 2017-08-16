const express = require('express');
const router = express.Router();
const threadCont = require('../controllers/threadController');

router.get('/', threadCont.getAllThread)
router.post('/', threadCont.createNewThread)
router.put('/:id', threadCont.updateSpecifiedThread)
router.delete('/:id', threadCont.removeSpecifiedThread)

module.exports = router;
