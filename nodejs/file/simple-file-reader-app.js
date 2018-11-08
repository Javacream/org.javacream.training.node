let fs = require("fs")
let contentHandler = require("./simple-content")
//Synchrones blockierendes Lesen
//let content = fs.readFile("data.txt", "UTF-8")
//console.log(content)

fs.readFile("data.txt", "UTF-8", contentHandler.handleContent)
