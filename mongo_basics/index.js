const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/catbabies";

MongoClient.connect(url, (err, db) => {
    err ? console.log("Error in running mongodb", err) : console.log("SUCCESS");
    let catbabies = db.collection("catbabies");

    catbabies.find({}).toArray((err, data) => {
        console.log(data);
        db.close();
    })

    // catbabies.insertOne({
    //     name: "Jacob",
    //     color: "Brown",
    //     age: 82
    // }, (err, result) => {
    //     err ? console.log("Error") : console.log(result);
    // });

    // catbabies.deleteOne({_id: new mongodb.ObjectID("597fb5332b0ccd1079673335")}, (err, result) => {
    //     err ? console.log(err) : console.log(result);
    //     db.close();
    // })

    catbabies.updateOne({_id: new mongodb.ObjectID("597fb171f2a7e71062acc025")}, {$set: {color: "orange"}}, (err, result) => {
        err ? console.log(err) : console.log("Item updated");
        db.close();
    })

});

