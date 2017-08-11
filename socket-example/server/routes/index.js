const express = require("express");
const Test = require("../models/index");
const testRouter = express.Router();

testRouter.get("/", (req, res) => {
    Test.find({}, (err, data) => {
        err ? res.status(500).send({ message: "Server Error", err})
            : res.status(200).send({ message: "Content Retrieved", data})
    })
});