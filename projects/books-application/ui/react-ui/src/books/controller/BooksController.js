import PubSub from 'pubsub-js'
export default class BooksController{
  constructor(){
    this.ENDPOINT = 'http://localhost:3001/service/books'

  }
    async allBooks() {
        try{
          let result = await fetch(this.ENDPOINT)
          let books = await result.json()
          return books
        }
        catch(err){
          alert("Something went wrong: " + err)
        }
      
    }

    async findBookByIsbn(isbn)  {
        const url = `${this.ENDPOINT}/${isbn}`
        let result = await fetch (url)
        let bookData = await result.json()
        PubSub.publish("books.search", `searched for book ${isbn}`)
        return bookData
      }
      async createBook(title)  {
        const url = `${this.ENDPOINT}/${title}`
        let response = await fetch (url, {method:'POST'})
        let isbn = await response.text()
        PubSub.publish("books.create", `created book ${isbn}`)

      }
    
}