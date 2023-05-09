require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

const path = require('path')

const cors = require('cors')
const helmet = require('helmet')

const connectDB = require('./db/connect')

const jobs = require('./routes/jobs')
const auth = require('./routes/auth')
const frontend = require('./routes/frontend')

const notFound = require('./middlewares/not-found')
const handleError = require('./middlewares/error-handler')


// const log = (req, res) => {
//   console.log(req.body)
// }

//middlewares
app.use(express.json())
app.use(cors())
// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       "script-src": ["'self'"]
//     },
//   },
// }))
// app.use(helmet())
// app.use(log)
app.use(express.static(path.resolve(__dirname, './client/dist')))

// routes
app.use('/', frontend)

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
