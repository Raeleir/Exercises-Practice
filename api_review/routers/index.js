const express = require("express");
const teamRoute = express.Router();
const uuid = require("uuid/v1");


let teams = [
    {
        _id: uuid(),
        name: "Jazz",
        location: "Salt Lake",
        sport: "Basketball"
    },
    {
        _id: uuid(),
        name: "Face",
        location: "Denver",
        sport: "Baseball"
    },
    {
        _id: uuid(),
        name: "Underpants",
        location: "Salt Lake",
        sport: "Hockey"
    }
];



teamRoute.route("/")
    .get((req, res) => {
    console.log(req.query);

    res.send(teams.filter((team)=> {
        for(key in req.query){
            if(req.query[key] !== team[key]) return false;
        }
        return true;
    }));
})
    .post((req, res) => {
        let template = {
            name: "",
            location: "",
            sport: ""
        };
        for(key in req.body){
            if(template.hasOwnProperty(key)) template[key] = req.body[key];
        }
        template._id = uuid();
        teams.push(template);
        res.status(201).send({
            message: "post successful"
        })
});


teamRoute.route("/:id")
    .get((req, res) => {
    for(i=0;i<teams.length;i++){
        if(teams[i]._id === req.params.id) res.send(teams[i]);
    }
})
    .delete((req, res) => {
        for(i=0;i<teams.length;i++) {
            if (teams[i]._id === req.params.id) teams.splice(teams[i], 1);
            res.status(200).send({
            message: "successfully deleted"
            })
        }
})
    .put((req, res) => {
    for(i=0;i<teams.length;i++){
        if(teams[i]._id === req.params.id) {
            for(key in req.body){
                if(teams[i].hasOwnProperty(key)) teams[i][key] = req.body[key];
            }
            res.status(200).send({
                message: "successfully updated"
            })
        }
    }
});




module.exports = teamRoute;