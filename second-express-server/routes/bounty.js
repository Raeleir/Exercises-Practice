const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/bounty.js");


bountyRouter.post("/", (req, res) => {
    let newBounty = new Bounty(req.body);
    newBounty.save((err, data) => {
        err ? res.status(500).send({ message: "Error", err})
            : res.status(201).send({ message: "New Post Created", data})
    })
});

bountyRouter.get("/", (req, res) => {
    Bounty.find(req.query, (err, data) => {
        err ? res.status(500).send({ message: "Error", err})
            : res.status(200).send({ message: "Data Found", data})
    })
});

bountyRouter.get("/:id", (req, res) => {
    Bounty.findOne({"_id": req.params.id}, (err, data) => {
        err ? res.status(500).send({ message: "Error", err})
            : res.status(200).send({ message: "Item Found", data});
    })
});

bountyRouter.put("/:id", (req, res) => {
    Bounty.findByIdAndUpdate({"_id": req.params.id}, req.body, {new: true}, (err, data) => {
        err ? res.status(500).send({ message: "Error", err})
            : res.status(200).send({ message: "Item Updated"});
    })
});

bountyRouter.delete("/:id", (req, res) => {
    Bounty.findByIdAndRemove({"_id": req.params.id}, (err, data) => {
        err ? res.status(500).send({ message: "Error", err})
            : res.status(200).send({ message: "Item Deleted"});
    })
});


module.exports = bountyRouter;