
const express = require('express')
const router = express.Router()

const serveHTML = require('../middlewares/frontend')

router.get('/login', serveHTML)
router.get('/', serveHTML)
router.get('/register', serveHTML)

module.exports = router