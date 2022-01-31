const { Router } = require('express')
const jwtMiddleware = require('../middlewares/jwt')
const router = Router()

router.use('/organization', jwtMiddleware, require('./organization'))
router.use('/contacts', jwtMiddleware, require('./contacts'))
module.exports = router
