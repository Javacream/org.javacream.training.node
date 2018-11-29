let fs = require("fs")
let util = require("util")

function training(){
    console.log("reading file start.txt")
    fs.readFile("start.txt", "UTF-8", (err, content) => {
        console.log(`reading file ${content}`);
        fs.readFile(content, "UTF-8", (err, content) => {
            console.log(`reading file ${content}`);
            fs.readFile(content, "UTF-8", (err, content) => {
                console.log(`reading content ${content}`);
            })
    
        })
    })
}

function trainingPromisified(){
    let readFile = util.promisify(fs.readFile)
    console.log("reading file start.txt")
    readFile("start.txt", "UTF-8").then(
        (content) => {
            console.log(`reading file ${content}`);
            return readFile(content, "UTF-8")
        }
    )
    .then(
        (content) => {
            console.log(`reading file ${content}`);
            return readFile(content, "UTF-8")
        }
    )
    .then(
        (content) => {
            console.log(`reading content ${content}`);
        }
    )   
}
async function trainingAsyncAwait(){
    let readFile = util.promisify(fs.readFile)
    console.log("reading file start.txt")
    let content = await readFile("start.txt", "UTF-8")
    console.log(`reading file ${content}`);
    let content2 = await readFile(content, "UTF-8")     
    console.log(`reading file ${content2}`);
    let content3 = await readFile(content2, "UTF-8")     
    console.log(`reading content ${content}`);
       
}

//training()
trainingPromisified()
//trainingAsyncAwait()
