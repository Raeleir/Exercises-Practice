let express = require("express");
let todoRouter = express.Router();
let Todo = require("../models/index.js");


todoRouter.post("/", (req, res) => {
    let newTodo = new Todo(req.body);
    newTodo.save((err, data) => {
        err ? res.status(500).send({ "message": "Error within server", err})
            : res.status(201).send({ "message": "Post Successful", data});
    });
});

todoRouter.get("/", (req, res) => {
    Todo.find(req.query, (err, data) => {
        err ? res.status(500).send({ "message": "Error within server", err})
            : res.status(200).send({ "message": "Get Successful", data});
    });
});

todoRouter.get("/:id", (req, res) => {
    Todo.findOne({"_id": req.params.id}, (err, data) => {
        err ? res.status(500).send({ "message": "Error within server", err})
            : res.status(200).send({ "message": "Search Successful", data});
    });
});

todoRouter.put("/:id", (req, res) => {
    Todo.findByIdAndUpdate({"_id": req.params.id}, req.body, {new: true}, (err, data) => {
        err ? res.status(500).send({ "message": "Error within server", err})
            : res.status(200).send({ "message": "Put Successful", data});
    });
});

todoRouter.delete("/:id", (req, res) => {
    Todo.findByIdAndRemove({"_id": req.params.id}, (err, data) => {
        err ? res.status(500).send({ "message": "Error within server", err})
            : res.status(200).send({ "message": "Delete Successful", data});
    });
});

module.exports = todoRouter;








// todoRouter.use((req, res, next) => {
//     for(key in req.query){
//         if(typeof req.query[key] === "string") req.query[key] = req.query[key].toLowerCase();
//     }
//     next();
// });
