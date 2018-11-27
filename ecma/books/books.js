let books = []
let isbnCounter = 0
function createBook(title, price){
    let isbn = "ISBN" + isbnCounter++
    let b = {
        isbn: isbn,
        title: title,
        price: price
    }
    books.push(b)
    return b
}

exports.store = books
exports.create = createBook