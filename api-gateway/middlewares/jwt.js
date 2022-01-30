const jwt = require('jsonwebtoken')
const configuration = require('../config')

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (token == null) return res.sendStatus(401)
	const secret = configuration.jwt

	jwt.verify(token, secret, (err) => {
		if (err) return res.sendStatus(403)
		next()
	})
}
module.exports = authenticateToken
