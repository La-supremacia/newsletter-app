const { Router } = require('express')
const contactRoutes = require('../controllers/contact.controller').routes
const router = Router()

router.use('/auth', require('./auth'))

router.get('/contacts', contactRoutes)
module.exports = router
