let express = require("express");
let bodyParser = require("body-parser");
let swaggerJsdoc = require("swagger-jsdoc")
let swaggerUi = require("swagger-ui-express");
let routes = require("./routes");

let app = express();

//################swagger


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Books API",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

//swagger end



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