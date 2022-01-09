var express = require('express')
var packageInfo = require('./package.json')
// Instancia de express de la app en node
const config = require('./config')

var app = express()

app.use(express.static('../app/build'))
//Ruta principal que retorna la versión del proyecto, ruta a la cual se hacen ping con Kaffeine para mantener el bot encendido
app.get('/test', function (req, res) {
	res.json({ version: packageInfo.version })
})

var server = app.listen(config.server.port, function () {
	var host = server.address().address
	var port = server.address().port

	console.log('Web server started at http://%s:%s', host, port)
})
