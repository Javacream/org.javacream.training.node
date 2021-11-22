const BooksModel = require('./index')
describe('BooksModel works', () => {
    const booksModel = new BooksModel()
    test('create books', () => {
      const isbn = booksModel.createBook('Node', 19.99, 200)  
      expect(isbn).toBeTruthy()
    })
    test('findAllBooks', () => {
        const allBooks = booksModel.findAll()  
        console.log(allBooks)
        expect(allBooks.length).toBe(1)
      })
  
})