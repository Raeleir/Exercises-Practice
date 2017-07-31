let express = require("express");
let cors = require("cors");
let bodyparser = require("body-parser");
const teamRoute = require("./routers/index.js");

let app = express();
let port = process.env.port || 8080;

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use("/teams", teamRoute);




app.listen(port, () => {
    console.log(`listening on ${port}`);
});