
const statusCodes = require('http-status-codes')

const handleError = (err,req,res,next) => {
  let customError = {
    statusCode : err.statusCode || statusCodes.INTERNAL_SERVER_ERROR ,
    msg : err.message || 'Something went wrong try again later'
  }

  if(err.name == 'ValidationError')
  {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
    customError.statusCode = 400
  }


  // res.status(customError.statusCode).send(customError.msg)
  // res.status(customError.statusCode).send(customError.msg)
  res.status(500).json(err)
}

module.exports = handleError