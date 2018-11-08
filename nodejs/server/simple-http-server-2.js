let httpUtility = require("http")
let service = require("./simple-service-module")
let blockingService = require("./simple-service-module-blocking")
let server = httpUtility.createServer(service.httpCallback)
server.listen("6789", "10.9.2.1")
console.log("server listening on port 6789")
let server2 = httpUtility.createServer(blockingService.httpCallback)
server2.listen("6790", "10.9.2.1")
console.log("server listening on port 6790")



