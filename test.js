
const express = require('express')

const app = express()
const PORT = process.env.PORT || 2222

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

app.get('/', async (req, res) => {
  console.log('Sùng Mí Nô')
  res.send('sùng mí nô')
})

app.get('/a', async (req, res) => {
  const d = 3
  if (d === 2) {
    console.log('????...')
  }
  res.send('kkkk...')
})

app.get('/b', async (req, res) => {
  const a = 2
  var person1 = { firstname: 'Hung', lastname: 'Nam' }
  var person2 = { firstname: 'Hoa', lastname: 'Cai' }

  function say (greeting1, greeting2) {
    console.log(greeting1 + ',' + ' ' + greeting2 + ' ' + this.firstname + ' ' + this.lastname)
  }
  say.call(person1, 'Hello', 'Good morning')
  say.call(person2, 'Hello', 'Good morning')

  say.apply(person1, ['Hello', 'Good moring'])
  say.apply(person2, ['hELLO', 'Good morning'])

  var sayHelloNam = say.bind(person1, 'Hello', 'Good morning')
  var sayHelloCai = say.bind(person2, 'Hellooo', 'Good morning')

  sayHelloCai()
  sayHelloNam()

  if (a === 1) {
    console.log('error: false')
  }
  res.send('error: true')
})
