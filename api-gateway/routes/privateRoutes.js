const { Router } = require('express')
const router = Router()

router.use(require('../middlewares/jwt'))
router.use('/organization', require('./organization'))
module.exports = router
