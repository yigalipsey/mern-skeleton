const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

router.post('/start-quiz', adminController.startQuiz)

module.exports = router
