require('dotenv').config()
module.exports = {
	server: {
		port: process.env.PORT,
	},
	microservices: {
		auth: process.env.AUTHENTICATION_URL,
		organization: process.env.ORGANIZATIONS_URL,
	},
}
