let db = require ("./database")
let content = require ("./contentserver")

let appRouter =  (app) => {
    app.get("/service/ping", (req, res) => {
      res.status(200).send("pong");
    });
    app.get("/service/welcome", async (req, res) => {
      let message = await db.retrieveWelcomeMessage()
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
      let isbn = req.params.isbn
      let bookData = req.body
      await db.insertBookByIsbn(isbn, bookData)
      res.status(200).send();
    });
    app.get("/service/content/:isbn", (req, res) => {
      content.handleContentRequest(req, res)
    });

  }
  
  exports.root = appRouter;