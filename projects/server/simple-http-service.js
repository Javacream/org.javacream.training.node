const { sleep } = require('./training-util')
let resultStatus = 200
let responseHeader = {"Content-Type": "text/plain"}
let httpCallback = function(request, response){
    response.writeHead(resultStatus, responseHeader)
    sleep(5000)
    response.end("Hello from Server\n")
}
exports.httpCallback = httpCallback
