const express = require('express')
const app = express()

app.get('/api/hello', (req, res) =>{
    res.send('Hello from express')
  })
const port = 3001
  app.listen(port,()=>{console.log(`server is running at http://localhost:${port}`)})