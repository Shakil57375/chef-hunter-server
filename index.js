const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const chefs = require('./data/data.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})



app.get('/chefs/:id', (req, res)=>{
  const id = req.params.id
  const recipe = chefs.find(recipe => recipe.id === parseInt(id))
  res.send(recipe)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})