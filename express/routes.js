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
    app.get("/service/books/:isbn", async (req, res) => {
      let isbn = req.params.isbn
      let book = await db.findBookByIsbn(isbn)
      res.status(200).send(book);
    });
    app.get("/service/content/:isbn", (req, res) => {
      content.handleContentRequest(req, res)
    });

  }
  
  exports.root = appRouter;