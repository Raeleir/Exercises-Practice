const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/todos");

let todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    dateDue: {
        type: Date,
        default: Date.now
    },
    price: Number
});

let Todo = mongoose.model("todolist", todoSchema);

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


Todo.find({}, (err, data) => {
    err ? console.log(err) : console.log("Found", data);
});

// Todo.findOne({_id: "5980badc747ca004e99e1ff6"}, (err, data) => {
//     err ? console.log(err) : console.log("Found", data);
// });

// Todo.deleteOne({_id: "5980badc747ca004e99e1ff6"}, (err, data) => {
//     err ? console.log(err) : console.log("Deleted", data);
// });

//
// let newData = {
//     title: "new title",
//     description: "new desc"
// };
//
// Todo.findByIdAndUpdate({_id: "5980b5839c1b5004cab1e765"}, newData, {new: true}, (err, data) => {
//     err ? console.log(err) : console.log("Found", data);
// });








// C R U D
// Coalesce
// Reconcile
// Undulate
// Disrobe

// C R U D
// Collaborate
// Rejuvenate
// Undulate
// Duplicate

// C R U D
// Coach
// Revolutionize
// Undulate
// Disrobe