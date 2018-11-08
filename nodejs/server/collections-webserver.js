let fs = require("fs")
let http = require("http")

let handleSortRequest = (request, response) => {
    let url = request.url;
    let sorter;
    if ("/asc" === url){
        sorter = (e1, e2) => e1.localeCompare(e2)
    }else{
        sorter = (e1, e2) => e2.localeCompare(e1)
    }
    fs.readFile("data.txt", function(err, content){
        let contentArray = content.toString().split("\n");
        contentArray.sort(sorter).forEach( e => response.write(e))
        response.end("");
    });
}


http.createServer(handleSortRequest).listen("8000", "0.0.0.0")
