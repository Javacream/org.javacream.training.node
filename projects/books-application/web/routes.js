import db from './database.js'
let appRouter =  (app) => {
    app.get("/service/welcome", async (req, res) => {
      let message = await db.welcomeMessage()
      res.status(200).send(message);
    });
    app.get("/service/books", async (req, res) => {
      let books = await db.findAllBooks()
      res.status(200).send(books);
    });
    app.route("/service/books/:isbn").get(async (req, res) => {
      let isbn = req.params.isbn
      let book = await db.findBookByIsbn(isbn)
      res.status(200).send(book);
    }).delete(async (req, res) => {
      let isbn = req.params.isbn
      await db.deleteBookByIsbn(isbn)
      res.status(200).send();
    }).put(async (req, res) => {
      let isbn = req.params.isbn
      let bookData = req.body
      await db.updateBookByIsbn(isbn, bookData)
      res.status(200).send();
    }).post(async (req, res) => {
      let title = req.params.isbn
      await db.insertBookByTitle(title)
      res.status(200).send();
    });
  }
  export default appRouter
  //exports.rootsFor = appRouter;