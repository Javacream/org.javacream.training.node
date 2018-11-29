let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/service/ping", (req, res) => {
    res.status(200).send("pong");
  });


let server = app.listen(3000, () => {
    console.log("server running on port:", server.address().port);
});  