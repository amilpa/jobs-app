
const getAllJobs = (req,res) => {
  res.send('All jobs')
}

const getJob = (req,res) => {
  res.send('Job found')
}

const createJob = (req,res) => {
  res.send('Job created')
}

const updateJob = (req,res) => {
  res.send('Job updated')
}

const deleteJob = (req,res) => {
  res.send('Job deleted')
}

module.exports = { getAllJobs , getJob , createJob , updateJob , deleteJob }