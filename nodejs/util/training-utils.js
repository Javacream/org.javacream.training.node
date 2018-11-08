function brutalSleep(millis) {
	let date = new Date();
	let curDate = null;
	do {
		curDate = new Date();
	} while (curDate - date < millis);
}
function setUp(server){
	server.constructor.prototype.onConnection = (callback) => {server.on("connection", callback)}
}
exports.sleep = brutalSleep
exports.setUp = setUp