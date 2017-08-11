const express = require("express");
const authRouter = express.Router();

const User = require("../models/model.js");

const passport = require("passport");
const Strategy = require("passport-local");

passport.use(new Strategy((username, password, done) => {
    User.findOne({username}, (err, currentUser) => {
        if(err) {
            done(err, false);
        } else if(currentUser === null) {
            done(null, false);
        } else {
            currentUser.auth(password, (isCorrect) => {
            isCorrect ? done(null, true) : done(null, false);
            })
        }
    })
}));

authRouter.use(passport.initialize());

authRouter.post("/login", passport.authenticate("local", {session; false}), (req, res) => {
    res.status(200).send({ message: "Errors"});
});

authRouter.post("/signup", (req, res) => {
    let makeUser = new User(req.body);
    makeUser.save((err, data) => {
        err ? res.status(500).send({ message: "Error", err})
            : res.status(201).send({ message: "User Created"})
    })
});

module.exports = authRouter;