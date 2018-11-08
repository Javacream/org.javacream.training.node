let fs = require("fs")

function handleRequestUsingStream(request, response){
    let url = request.url
    let filename = "../static-content/" + url
    stream(filename, response)
}
function handleRequestUsingCallback(request, response){
    let url = request.url
    let filename = "../static-content/" + url
    let readFileCallback = (err, content) => {
        response.end(content)
    }
    fs.readFile(filename, readFileCallback)
}


function stream(filename, response){
    fs.createReadStream(filename).on('error', (err) => {
        response.end("not found")
    }).pipe(response);

}

exports.handleRequestUsingStream = handleRequestUsingStream
exports.handleRequestUsingCallback = handleRequestUsingCallback
