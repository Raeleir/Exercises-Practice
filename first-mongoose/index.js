const mongoose = require("mongoose");
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
const port = process.env.PORT || 8080;
const todoRouter = require("./routes/index.js");

mongoose.connect("mongodb://localhost:27017/todos");

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/todo", todoRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});