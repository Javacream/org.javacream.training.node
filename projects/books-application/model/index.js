'use strict'
const Book = require('javacream_books_types')
class BooksModel {
    constructor(){
        this.counter=  0,
        this.books = new Map()
    
    }
    createBook= (title, price, pages) => {
        const b = new Book(this.counter++, title, price, pages)
        this.books.set(this.counter, b)
        return this.counter
    } 
    findBookByIsbn= (isbn) => {
        return this.books[isbn]
    } 
    findAll= () => {
        return Array.from(this.books.values)
    }
    update= (book)=> {
        this.books.set(book.isbn, book)
    } 
    deleteBookByIsbn= (isbn) => {
        this.books.delete(isbn)
    }
}
module.exports = BooksModel