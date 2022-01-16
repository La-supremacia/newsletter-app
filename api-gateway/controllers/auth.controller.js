const { auth } = require('../common/constants')
const axios = require('axios').default

const signIn = async (req, res) => {
	const { password, email } = req.body
	const { path } = auth.signIn
	try {
		const result = await axios.post(auth.baseUrl + path, {
			password,
			email,
		})
		const { data } = result
		const {
			headers: { authorization: token },
		} = result

		res.set('Authorization', token)
		res.send(data)
	} catch (error) {
		console.log(error)
	}
}

const signUp = async (req, res) => {
	const { password, email, name } = req.body
	const { path } = auth.signUp
	try {
		const result = await axios.post(auth.baseUrl + path, {
			password,
			email,
			name,
		})
		const { data } = result
		res.send(data)
	} catch (error) {
		console.log(error)
	}
}

const retrieveRoutePaths = async (req, res) => {
	try {
		const result = await axios.get(auth.baseUrl)
		const { data } = result
		res.send(data)
	} catch (error) {
		console.log(error)
	}
}

const authControllers = {
	signIn,
	signUp,
	retrieveRoutePaths,
}

module.exports = authControllers
