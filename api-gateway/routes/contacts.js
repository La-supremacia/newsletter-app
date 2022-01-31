const { Router } = require('express')
const {
	read,
	search,
	create,
	update,
	remove,
} = require('../controllers/contact.controller')
const router = Router()

router
	.get('/:id', read)
	.get('/search', search)
	.post('/', create)
	.put('/:id', update)
	.delete('/:id', remove)

module.exports = router
