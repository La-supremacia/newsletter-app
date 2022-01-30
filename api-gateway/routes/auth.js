const { Router } = require('express')
const {
	signIn,
	signUp,
	retrieveRoutePaths,
} = require('../controllers/auth.controller')
const router = Router()

router.post('/sign-in', signIn)
router.post('/sign-up', signUp)
router.get('/', retrieveRoutePaths)

module.exports = router
