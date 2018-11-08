var net = require('net');
var server = net.createServer(function(connection) { // 'connection' listener
	console.log('a client has connected');
	connection.on('end', function() {
		console.log('a client has disconnected');
	});
	connection.on('data', function(data) {
		console.log('a client sent data ' + data);
		connection.write('hello\r\n');
		connection.write(data);
	});
});
server.listen(1337, function() { // 'listening' listener
	console.log('server bound');
});