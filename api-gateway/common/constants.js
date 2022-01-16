const config = require('../config')
const endpointDefinitions = {
	auth: {
		baseUrl: config.microservices.auth,
		signIn: {
			path: 'sign-in',
		},
		signUp: {
			path: 'sign-up',
		},
	},
}

module.exports = endpointDefinitions
