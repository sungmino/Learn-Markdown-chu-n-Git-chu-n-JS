
const express = require('express')

const app = express()
const PORT = process.env.PORT || 2222

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

app.get('/', async (req, res) => {
  console.log('Sùng Mí Nô')
  res.send('sùng mí nô')
})

app.get('/a', async (req, res) => {
  if (1 !== 2) {
    console.log('????...')
  }
  res.send('kkkk...')
})
