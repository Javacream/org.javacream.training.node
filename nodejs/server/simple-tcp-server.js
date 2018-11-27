let net = require('net');
let server = net.createServer(function(connection) {
	connection.on('data', function(data) {
		console.log('a client sent data ' + data);
		connection.write('hello\r\n');
		connection.write(data);
	});
});
server.listen(1337, function() { // 'listening' listener
	console.log('server bound');
});