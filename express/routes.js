let appRouter =  (app) => {
    app.get("/service/ping", (req, res) => {
      res.status(200).send("pong");
    });
    app.get("/service/welcome", (req, res) => {
      res.status(200).send("Welcome to REST service");
    });
  }
  
  exports.root = appRouter;