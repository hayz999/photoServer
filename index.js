const express = require('express')
const knex = require('./connection')
const host = '0.0.0.0'
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const photos = require('./routes/routes')
const app = express()
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello I work!'))
app.use('/photos', photos)

app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  })
})

app.listen(port, host)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port))