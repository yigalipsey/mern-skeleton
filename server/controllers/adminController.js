const Quiz = require('../models/Quiz')

exports.startQuiz = async (req, res) => {
  try {
    // Logic to start the quiz (set quiz state to active)
    // For simplicity, let's assume there's a variable `quizActive` for quiz state
    quizActive = true

    res.json({ message: 'Quiz started' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
