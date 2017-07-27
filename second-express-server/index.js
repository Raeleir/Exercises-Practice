let express = require("express");
let bodyParser = require("body-parser");


let app = express();

const PORT = process.env.PORT || 8080;

let arr = [
    {
        name: "Edward Cullen",
        location: "somethingport",
        reward: 60,
        dead: false
    },
    {
        name: "Bella Cullen",
        location: "somethingport",
        reward: 1000,
        dead: false
    },
    {
        name: "Michael Jackson",
        location: "wonderland",
        reward: 10,
        dead: true
    }
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(req.body);
    next();
})

app.get("/", (req, res) => {
    res.status(200).send({"message": "Success, here is your data", data: arr});
})

app.post("/", (req, res) => {
    let newArr = req.body;
    arr.push(newArr);
    res.status(201).send({"message": "Success, data was posted"});
})

app.listen(PORT, () => {
    console.log(`Starting server on PORT ${PORT}`);
})