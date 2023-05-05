const Users = require('../models/user')
const statusCodes = require('http-status-codes')

const { BadRequestError, UnauthenticatedError } = require('../errors/index')

const registerUser = async (req, res) => {
  const user = await Users.create({ ...req.body })
  const token = user.createJWT()
  res.status(statusCodes.OK).json({ user: { name: user.name }, token })
}

const loginUser = async (req, res) => {

  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }

  const user = await Users.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Account does not exist')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid password')
  }

  const token = user.createJWT()

  res.status(statusCodes.OK).json({ user: { name: user.name }, token })
}

module.exports = { registerUser, loginUser }
