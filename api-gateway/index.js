const express = require('express')
const packageInfo = require('./package.json')
const config = require('./config')
const routes = require('./routes')
const app = express()

//MIDDLEWARES
app.use(require('./middlewares'))
//MIDDLEWARES

//RUTAS
app.use('/api/v1', routes)
//RUTAS

app.use(express.static('../app/build'))
//Ruta principal que retorna la versión del proyecto, ruta a la cual se hacen ping con Kaffeine para mantener el bot encendido

app.get('/test', function (req, res) {
	res.json({ version: packageInfo.version })
})

const server = app.listen(config.server.port, function () {
	const host = server.address().address
	const port = server.address().port

	console.log('Web server started at http://%s:%s', host, port)
})
