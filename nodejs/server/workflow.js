let fs = require("fs")
let util = require("util")

function training(){
    fs.readFile("start.txt", "UTF-8", (err, content) => {
        fs.readFile(content, "UTF-8", (err, content) => {
            console.log("Content: " + content);
        })
    })
}

function trainingPromisified(){
    let readFile = util.promisify(fs.readFile)
    readFile("start.txt", "UTF-8").then(
        (content) => {
            console.log(content)
            return readFile(content, "UTF-8")
        }
    )
    .then(
        (content) => {
            console.log("Content: " + content)
        }
    )   
}
async function trainingAsyncAwait(){
    let readFile = util.promisify(fs.readFile)
    let content = await readFile("start.txt", "UTF-8")
    let result = await readFile(content, "UTF-8")     
    console.log("Content: " + result)
       
}

training()
trainingPromisified()
trainingAsyncAwait()
