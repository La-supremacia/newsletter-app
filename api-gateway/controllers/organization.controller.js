const { organization } = require('../common/constants')
const axios = require('axios').default

const createOrganization = async (req, res) => {
	const { organization_name } = req.body
	const { path } = organization.create

	try {
		const result = await axios.post(
			organization.baseUrl + path,
			{
				organization_name,
			},
			{ headers: { authorization: req.headers.authorization } }
		)
		const { data } = result
		res.send(data)
	} catch (error) {
		console.log(error)
	}
}

const retrieveRoutePaths = async (req, res) => {
	try {
		const result = await axios.get(organization.baseUrl)
		const { data } = result
		res.send(data)
	} catch (error) {
		console.log(error)
	}
}

const organizationControllers = {
	createOrganization,
	retrieveRoutePaths,
}

module.exports = organizationControllers
