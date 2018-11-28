let net = require('net')
let util = require('../util/training-utils')
let server = net.createServer((connection) => {
	connection.on('data', function(data) {
		console.log('a client sent data ' + data)
		connection.write('hello\r\n')
		connection.write(data)
	});
});
server.listen(1337, () => {
	console.log('server 1 bound')
})
let server2 = net.createServer((connection) => {
	connection.on('data', function(data) {
		console.log('a client sent data ' + data)
		connection.write('goodnight\r\n')
		util.sleep(5000)
		connection.write(data)
	});
});
server2.listen(1338, () => {
	console.log('server 2 bound')
})
