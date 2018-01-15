const indir = '.';
const outdir = 'processed'
var fs = require('fs');
fs.readdir('.', function(er, files) {
	files.forEach(processFile)
});

function processFile(file){
	if (fs.lstatSync(file).isFile()){
		readFile(file);
  	fs.copyFile(file, outdir +'/' + file, (err) => {if (err) throw err;});
	}
}
function readFile(file){
  fs.readFile(file, function(er, data) {
  	console.log(data);
  });
}
