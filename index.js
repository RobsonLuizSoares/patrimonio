const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'ba8a72dcf3a647',
  password: '4cbeb51c',
  database: 'heroku_afac53f1de8d958'
})

const dependencies = {
  connection
}

//Routes
const pendencias = require('./routes/pendencias')

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.get('/', (req, res) => res.render('home'))
app.use('/pendencias', pendencias(dependencies))

//view engine

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

connection.connect(() => {
  app.listen(port, () => {
    console.log('Server CRUD running')
  })
})
