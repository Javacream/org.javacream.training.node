let httpUtility = require("http")
let service = require("./simple-http-service")
let server = httpUtility.createServer(service.httpCallback)
server.listen("6789", "0.0.0.0")
console.log("server listening on port 6789")

