require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const jobs = require('./routes/jobs')
const auth = require('./routes/auth')

const notFound = require('./middlewares/not-found')
const handleError = require('./middlewares/error-handler')

//middlewares
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('<h1>Jobs api</h1><a href="/api/v1/jobs">Main route</a>')
})

app.use('/api/v1/jobs', jobs)
app.use('/api/v1/auth', auth)

app.use(notFound)
app.use(handleError)


const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server listening on port ${port}`))
  } catch (error) {
    console.log(error.message);
  }
}

start()
