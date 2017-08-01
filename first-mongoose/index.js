const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todos");

let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();

const port = process.env.PORT || 8080;
const todoRouter = require("./routes/index.js");

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/todo", todoRouter);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});





















// let manana = new Date();
// manana.setDate(manana.getDate() + 1);
//
// let newTodo = new Todo({
//     title: "fart",
//     description: "audibly",
//     price: 500
// });
//
// newTodo.save((err, data) => {
//     err ? console.log(err) : console.log("Saved", data);
// });
//
// console.log(todoSchema.title);
//
//
// Todo.find({}, (err, data) => {
//     err ? console.log(err) : console.log("Found", data);
// });
//
// Todo.findOne({_id: "5980badc747ca004e99e1ff6"}, (err, data) => {
//     err ? console.log(err) : console.log("Found", data);
// });
//
// Todo.deleteOne({_id: "5980badc747ca004e99e1ff6"}, (err, data) => {
//     err ? console.log(err) : console.log("Deleted", data);
// });
//
//
// let newData = {
//     title: "new title",
//     description: "new desc"
// };
//
// Todo.findByIdAndUpdate({_id: "5980b5839c1b5004cab1e765"}, newData, {new: true}, (err, data) => {
//     err ? console.log(err) : console.log("Found", data);
// });