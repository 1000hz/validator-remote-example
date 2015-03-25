var express = require('express')
var app     = express()

app.use('/js', express.static(__dirname + '/node_modules/bootstrap-validator/dist'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/validate', function (req, res) {
  if (req.query.food === 'pizza')
    res.sendStatus(200)
  else {
    res.writeHead(400, 'WRONG! It\'s pizza.')
    res.send()
  }
})

var server = app.listen(3000, function () {
  console.log('Listening at http://localhost:3000')
})