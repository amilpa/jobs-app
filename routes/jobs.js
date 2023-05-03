
const express = require('express')
const router = express.Router()

const { getAllJobs, getJob, createJob, updateJob, deleteJob } = require('../controllers/jobs')

const auth = require('../middlewares/authentication')

//get record
router.get('/', auth, getAllJobs)
router.get('/:id', auth, getJob)

//change record
router.post('/', auth, createJob)
router.patch('/:id', auth, updateJob)

//delete record
router.delete('/:id', auth, deleteJob)

module.exports = router
