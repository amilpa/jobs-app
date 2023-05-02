
const { CustomAPIError } = require('./custom-error')
const statusCodes = require('http-status-codes')

class NotFoundError extends CustomAPIError
{
  constructor(message)
  {
    super(message)
    this.statusCode - statusCodes.NOT_FOUND
  }
}

module.exports = { NotFoundError }