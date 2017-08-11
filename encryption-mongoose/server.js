const rs = require("readline-sync");
const mongoose = require("mongoose");
const User = require("./index");

mongoose.connect("mongodb://localhost:27017/userexample");

let username = rs.question("Username: ");
let password = rs.question("Password: ", {hideEchoBack: true});
//
// let createUser = new User({
//     username,
//     password
// });
//
// createUser.save((err, data) => {
//     err ? console.log(err)
//         : console.log("New user was saved", data);
// });

User.findOne({username}, (err, currentUser) => {
    if(err){
        console.log(err);
    } else if(currentUser === null) {
        console.log("User not found");
    } else {
        currentUser.auth(password, (isCorrect) => {
            isCorrect ? console.log("Success") : console.log("Failure");
        })
    }
});