let express = require("express");
let bodyParser = require("body-parser");
let routes = require("./routes");

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/service/ping", (req, res) => {
    res.status(200).send("pong");
  });

app.get("/service/greeter/:name", (req, res) => {
    let name = req.params.name
    res.status(200).send(`Hello ${name}!`);
  });
app.post("/service/greeter", (req, res) => {
    let person = req.body
    console.log(person)
    console.log(`Person: name=${person.name}, height=${person.height}`)
    res.status(200).send(`Hello ${person.name}!`);
  });

routes.rootsFor(app)
let server = app.listen(3000, () => {
    console.log(`Server running on port: ${server.address().port}`);
});  