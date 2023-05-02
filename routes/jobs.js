
const express = require('express')
const router = express.Router()

const { getAllJobs , getJob , createJob , updateJob , deleteJob } = require('../controllers/jobs')

//get record
router.get('/' , getAllJobs)
router.get('/:id',getJob)

//change record
router.post('/',createJob)
router.post('/:id',updateJob)

//delete record
router.delete('/:id',deleteJob)

module.exports = router