const Jobs = require('../models/jobs')
const statusCodes = require('http-status-codes')

const { BadRequestError, NotFoundError } = require('../errors/index')

const getAllJobs = async (req, res) => {
  const allJobs = await Jobs.find()
  res.status(statusCodes.OK).json(allJobs)
}

const getJob = (req, res) => {
  res.send('Job found')
}

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId
  const job = await Jobs.create(req.body)
  res.status(statusCodes.CREATED).json(job)
}

const updateJob = async (req, res) => {

  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId }
  } = req

  if (company === '' || position === '') {
    throw new BadRequestError('Company or position cannot be empty')
  }

  const job = await Jobs.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  )

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`)
  }


  res.status(statusCodes.OK).json(job)
}

const deleteJob = async (req, res) => {

  const {
    user: { userId },
    params: { id: jobId }
  } = req

  const job = await Jobs.findByIdAndDelete({ _id: jobId, createdBy: userId })

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`)
  }

  res.status(statusCodes.OK).json(job)
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }
