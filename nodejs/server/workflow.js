let fs = require("fs")

function training(){
    fs.readFile("start.txt", "UTF-8", function(err, content){
        fs.readFile(content, "UTF-8", function(err, content){
            console.log("Content: " + content);
        })
    })
}

async function trainingAsync(){
//    let nextFile = await     
}
training()
