const { Router } = require('express')
const router = Router()

router.use(require('./publicRoutes')) // Enrutador publicas
router.use(require('./privateRoutes')) // Enrutador privadas

module.exports = router
