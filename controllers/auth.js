const Users = require('../models/user')
const statusCodes = require('http-status-codes')

const registerUser = async (req,res) => {
  const user = await Users.create({ ...req.body})
  const token = user.createJWT()
  res.status(statusCodes.CREATED).json({ user : { name : user.name }, token})
}

const loginUser = (req,res) => {
  res.send('User logged in')
}

module.exports = { registerUser,loginUser }