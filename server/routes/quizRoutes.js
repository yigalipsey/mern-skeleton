const express = require('express')
const router = express.Router()
const quizController = require('../controllers/quizController')

router.get('/quiz-question', quizController.getQuizQuestion)

module.exports = router
