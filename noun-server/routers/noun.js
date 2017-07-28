const express = require("express");
const nounRouter = express.Router();
const uuid = require("uuid/v1");

//POST
nounRouter.post("/", (req, res) => {
    let newArr = req.body;
    newArr.id = uuid();
    arr.push(newArr);
    res.status(201).send({message: "success"});
})

//GET
nounRouter.get("/", (req, res) => {
    let search = arr.filter((item) => {
            for(key in req.query){
                if(req.query[key] !== arr[key]) return false;
            }
            return true;
        })
    console.log(req.query);
    res.status(200).send({message: "success", data: arr});
})

//Search
nounRouter.get("/:id", (req, res) => {
    for(i=0;i<arr.length;i++){
        if(arr[i].id === req.params.id) res.send(arr[i]);
    }
    return res.status(404).send({
        message: "error"
    });
})

//PUT
nounRouter.put("/:id", (req, res) => {
    for(i=0;i<arr.length;i++){
        if(arr[i].id === req.params.id){
            for(key in req.body){
                if(arr[i].hasOwnProperty(key)){
                    arr[i][key] = req.body[key];
                }
            }
            return res.status(200).send({
                message: "updated"
            });
        }
    }
    return res.status(404).send({
        message: "error"
    });
})

//DELETE
nounRouter.delete("/:id", (req, res) => {
    for(i=0;i<arr.length;i++){
        if(arr[i].id === req.params.id){
            arr.splice(i, 1);
            return res.status(200).send({
                message: "deleted"
            });
        }
    }
    return res.status(404).send({
        message: "error"
    });
})


module.exports = nounRouter;