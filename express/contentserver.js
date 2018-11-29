let fs = require("fs")

function handleContentRequest(request, response){
    let isbn = request.params.isbn
    let filename = "./books/" + isbn + ".txt"
    stream(filename, response)
}
function stream(filename, response){
    fs.createReadStream(filename).on('error', (err) => {
        response.end("not found")
    }).pipe(response);

}

exports.handleContentRequest = handleContentRequest
