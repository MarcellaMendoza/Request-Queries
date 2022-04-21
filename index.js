const express = require('express')
const app = express()
const port = 3000
let lastMax = -1
let correctAnswer = -1

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/api/:max/:guess', (req, res) => {
  const max = parseInt(req.params.max)
  const guess = parseInt(req.params.guess)
  if (max !== lastMax) { // If the user has changed their maximum value or made a new maximum value, update the correct answer
    correctAnswer = Math.floor(Math.random() * max) + 1
    lastMax = max
  }
  if (correctAnswer === guess) {
    res.send(true)
  }
  else {
    res.send(false)
  }
})

app.listen(port)