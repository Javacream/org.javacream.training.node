let express = require("express");
let bodyParser = require("body-parser");
let router = require("./routes.js");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.root(app);

let server = app.listen(3000, () => {
    console.log("server running on port.", server.address().port);
});