const express = require("express");
const bountyRouter = express.Router();

//POST || CREATE
bountyRouter.post("/", (req, res) => {
    let newArr = req.body;
    newArr.id = uuid();
    arr.push(newArr);
    res.status(201).send({"message": "Success, data was posted"});
});

//READ
bountyRouter.get("/", (req, res) => {
    res.status(200).send({"message": "Success, here is your data", data: arr});
});

//READ (Search)
bountyRouter.get("/:id", (req, res) => {
    for(i=0;i<arr.length;i++){
        if(arr[i].id === req.params.id){
            res.send(arr[i]);
        }
    }
    return res.status(404).send({
        "message": "ERROR NOT FOUND"
    });
});

//UPDATE || EDIT
bountyRouter.put("/:id", (req, res) => {
    for(i=0;i<arr.length;i++){
        if(arr[i].id === req.params.id){
            for(key in req.body){
                if(arr[i].hasOwnProperty(key)){
                    arr[i][key] = req.body[key];
                }
            }
            return res.status(200).send({
                "message": "UPDATE SUCCESSFUL"
            });
        }
    }
    return res.status(404).send({
        "message": "ERROR"
    });
});

//DELETE || DESTROY
bountyRouter.delete("/:id", (req, res) => {
    for(i=0;i<arr.length;i++){
        if(arr[i].id === req.params.id){
            arr.splice(i, 1);
            return res.status(200).send({
                "message": "ITEM DELETED"
            })
        }
    }
    return res.status(404).send({
        "message": "ERROR ITEM NOT FOUND"
    });
});


module.exports = bountyRouter;