const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const settings = require("./config/settings.js");

const authRouter = require("./routes/route");

const PORT = process.env.PORT || settings.port;

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});