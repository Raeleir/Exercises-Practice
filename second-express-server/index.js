const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid/v1");
const app = express();
const PORT = process.env.PORT || 8080;

const arr = [];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    next();
})

//POST || CREATE
app.post("/", (req, res) => {
    let newArr = req.body;
    newArr.id = uuid();
    arr.push(newArr);
    res.status(201).send({"message": "Success, data was posted"});
})

//READ
app.get("/", (req, res) => {
    res.status(200).send({"message": "Success, here is your data", data: arr});
})

//READ (Search)
app.get("/:id", (req, res) => {
    console.log(req.params);
    for(i=0;i<arr.length;i++){
        if(arr[i].id === req.params.id){
            res.send(arr[i]);
        }
    }
    return res.status(404).send({
        "message": "ERROR NOT FOUND"
    });
})

//UPDATE || EDIT
app.put("/:id", (req, res) => {
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
})

//DELETE || DESTROY
app.delete("/:id", (req, res) => {
    for(i=0;i<arr.length;i++){
        if(arr[i].id === req.params.id){
            arr.splice(i, 1);
            return res.status(404).send({
                "message": "ITEM DELETED"
            })
        }
    }
    return res.send({
        "message": "ERROR ITEM NOT FOUND"
    });
})




app.listen(PORT, () => {
    console.log(`Starting server on PORT ${PORT}`);
})