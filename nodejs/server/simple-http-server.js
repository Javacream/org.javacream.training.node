let httpUtility = require("http")
let service = require("./simple-service-module")
let server = httpUtility.createServer(service.httpCallback)
server.listen("6789", "10.9.2.1")
console.log("server listening on port 6789")

