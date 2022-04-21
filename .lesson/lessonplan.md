# Lesson plan
  
---

Index.js:
```
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
```

index.html:
```
  <script>
    
    async function ButtonClicked() {
      const resultElem = document.getElementById('result')
      const max = parseInt(document.getElementById("max").value) || 0
      const guess = parseInt(document.getElementById("guess").value) || 0
      if ((guess > 0) && (guess <= max)) {
        const url = `/api/${max}/${guess}`
        const rawResult = await fetch(url)
        const result = await rawResult.json() // resolves to a boolean
        if (result === true) {
          resultElem.innerHTML = "Congrats, you got it right!"
        } else {
          resultElem.innerHTML = "Aww, that's not right. Please try again."
        }   
      } 
      else {
        resultElem.innerHTML = "That input is not valid. Please try again."
      }
    }
    
  </script>
```