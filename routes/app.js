const express = require('express')
const router = express.Router()
const appController = require('../controllers/app')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, appController.getApp)

module.exports = router