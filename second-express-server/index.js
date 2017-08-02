const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bountyRouter = require("./routes/bounty.js");
const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb://localhost:27017/bounty");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/bounty", bountyRouter);

app.listen(PORT, () => {
    console.log(`Starting server on PORT ${PORT}`);
});



