let db = require ("./database")

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
      let books = await db.findBookByIsbn(req.params.isbn)
      res.status(200).send(books);
    });
  }
  
  exports.root = appRouter;