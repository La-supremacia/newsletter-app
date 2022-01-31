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
	contacts: {
		baseUrl: config.microservices.contacts,
		create: {
			path: 'contacts/',
		},
		read: {
			path: 'contacts/',
		},
		search: {
			path: 'contacts/search/',
		},
		update: {
			path: 'contacts/',
		},
		delete: {
			path: 'contacts/',
		},
	},
}

module.exports = endpointDefinitions
