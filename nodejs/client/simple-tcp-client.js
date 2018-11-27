let net = require('net');
let client = net.connect({port : 1337}, function() { // 'connect' listener
	console.log('client connected');
	client.write('world!\r\n');
});
client.on('data', function(data) {
	console.log(data.toString());
	client.end();
});