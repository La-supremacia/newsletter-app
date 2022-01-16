const morgan = require('morgan')
const express = require('express')

module.exports = [
	express.json(),
	express.urlencoded({ extended: true }),
	morgan('dev'),
]
