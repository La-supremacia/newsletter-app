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
	organization: {
		baseUrl: config.microservices.organization,
		create: {
			path: 'organization',
		},
	},
}

module.exports = endpointDefinitions
