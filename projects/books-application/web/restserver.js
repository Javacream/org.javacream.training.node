import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes.js'
import cors from 'cors'

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

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
routes(app)
let server = app.listen(3001, () => {
    console.log(`Server running on port: ${server.address().port}`);
});  