let books = require('./books')
let util = require('./books-utilities')

function app(){
    let b1 = books.create("JavaScript", 9.99)
    let b2 = books.create("ECMAScript", 19.99)
    let b3 = books.create("Java", 29.99)
    let b4 = books.create("Python", 15.99)
    console.log("ISBN ASCENDING")
    console.log(books.store.sort(util.isbnAscending))
    console.log("ISBN DESCENDING")
    console.log(books.store.sort(util.isbnDescending))
    console.log("TITLE ASCENDING")
    console.log(books.store.sort(util.titleAscending))
    console.log("TITLE DESCENDING")
    console.log(books.store.sort(util.titleDescending))
    console.log("PRICE ASCENDING")
    console.log(books.store.sort(util.priceAscending))
    console.log("PRICE DESCENDING")
    console.log(books.store.sort(util.priceDescending))

}

app()