const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const cors = require('cors')
const adminRoutes = require('./routes/adminRoutes')
const quizRoutes = require('./routes/quizRoutes')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())

require('dotenv').config()

// Connect to MongoDB
connectDB()

// Middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/admin', adminRoutes)
app.use('/quiz', quizRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.underline)
})
