function brutalSleep(millis) {
	let date = new Date();
	let curDate = null;
	do {
		curDate = new Date();
	} while (curDate - date < millis);
}
exports.sleep = brutalSleep