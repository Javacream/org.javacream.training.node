let util = require("../util/training-utils")

let resultStatus = 200
let responseHeader = {"Content-Type": "text/plain"}
let httpCallback = function(request, response){
    util.sleep(5000)
    response.writeHead(resultStatus, responseHeader)
    response.end("Hello from Server\n")
}
exports.httpCallback = httpCallback
