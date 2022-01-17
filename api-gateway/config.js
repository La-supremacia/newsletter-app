require('dotenv').config()
module.exports = {
	server: {
		port: process.env.PORT,
	},
	jwt: process.env.JWT_SECRET_KEY,
	microservices: {
		auth: process.env.AUTHENTICATION_URL,
		organization: process.env.ORGANIZATIONS_URL,
	},
}
