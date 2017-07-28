const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nounRouter = require("./routers/noun.js");
const app = express();
const PORT = process.env.PORT || 8080;

const arr = [
    {
        "test": "test"
    },
    {
        "test2": "testq"
    },
    {
        "test3": "testewqwe2"
    }
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(nounRouter);

app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}`);
})