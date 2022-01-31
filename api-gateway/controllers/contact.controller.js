const { contacts } = require('../common/constants')
const axios = require('axios').default

/**
 * Retrieve all routes in the service
 */
const readRoutes = async (req, res) => {
	const { baseUrl } = contacts

	try {
		const result = await axios.get(baseUrl)
		const { data, status, headers } = result
		res.set(headers)
		res.status(status)
		res.send(data)
	} catch (error) {
		let status = 500
		let data = error
		if (error.response) {
			status = error.response.status
			data = error.response.data
		}

		res.status(status)
		res.send(data)
	}
}

/**
 * Retrieve a contact by its id
 */
const readContact = async (req, res) => {
	const { id } = req.params
	const { path } = contacts.read

	try {
		const result = await axios.get(contacts.baseUrl + path + id, {
			headers: { authorization: req.headers.authorization },
		})
		const { data, status, headers } = result
		res.set(headers)
		res.status(status)
		res.send(data)
	} catch (error) {
		let status = 500
		let data = error
		if (error.response) {
			status = error.response.status
			data = error.response.data
		}

		res.status(status)
		res.send(data)
	}
}

/**
 * Search contacts by query parameters
 */
const searchContacts = async (req, res) => {
	const {
		search: { path },
		baseUrl,
	} = contacts

	const queryUrl = new URLSearchParams(req.query)
	const url = baseUrl + path + '?' + queryUrl.toString()

	try {
		const result = await axios.get(url, {
			headers: { authorization: req.headers.authorization },
		})
		const { data, status, headers } = result
		res.set(headers)
		res.status(status)
		res.send(data)
	} catch (error) {
		let status = 500
		let data = error
		if (error.response) {
			status = error.response.status
			data = error.response.data
		}

		res.status(status)
		res.send(data)
	}
}

/**
 * Creates a new contact
 */
const createContact = async (req, res) => {
	const {
		create: { path },
		baseUrl,
	} = contacts

	try {
		const result = await axios.post(baseUrl + path, req.body, {
			headers: req.headers,
		})
		const { data, status, headers } = result
		res.set(headers)
		res.status(status)
		res.send(data)
	} catch (error) {
		let status = 500
		let data = error
		if (error.response) {
			status = error.response.status
			data = error.response.data
		}

		res.status(status)
		res.send(data)
	}
}

/**
 * Update a contact by id
 */
const updateContact = async (req, res) => {
	const { id } = req.params
	const {
		update: { path },
		baseUrl,
	} = contacts

	try {
		const result = await axios.put(baseUrl + path + id, req.body, {
			headers: req.headers,
		})
		const { data, status, headers } = result
		res.set(headers)
		res.status(status)
		res.send(data)
	} catch (error) {
		let status = 500
		let data = error
		if (error.response) {
			status = error.response.status
			data = error.response.data
		}

		res.status(status)
		res.send(data)
	}
}

/**
 * Delete a contact by id
 */
const deleteContact = async (req, res) => {
	const { id } = req.params
	const {
		delete: { path },
		baseUrl,
	} = contacts

	try {
		const result = await axios.delete(baseUrl + path + id, {
			headers: req.headers,
		})
		const { data, status, headers } = result
		res.set(headers)
		res.status(status)
		res.send(data)
	} catch (error) {
		let status = 500
		let data = error
		if (error.response) {
			status = error.response.status
			data = error.response.data
		}

		res.status(status)
		res.send(data)
	}
}

const contactsController = {
	routes: readRoutes,
	read: readContact,
	search: searchContacts,
	create: createContact,
	update: updateContact,
	remove: deleteContact,
}

module.exports = contactsController
