const { Router } = require('express')
const { createOrganization } = require('../controllers/organization.controller')
const router = Router()

router.post('/', createOrganization)

module.exports = router
