let db = require ("./database")

let appRouter =  (app) => {
    app.get("/service/ping", (req, res) => {
      res.status(200).send("pong");
    });
    app.get("/service/welcome", async (req, res) => {
      let message = await db.retrieveWelcomeMessage()
      res.status(200).send(message);
    });
  }
  
  exports.root = appRouter;