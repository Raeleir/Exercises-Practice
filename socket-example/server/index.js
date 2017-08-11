const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 9000;
const app = express();
const socketIO = require("socket.io");
const testRouter = require("./routes/index");
mongoose.connect("mongodb://localhost27017/tests");

app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/tests", testRouter);

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

const io = socketIO(server);

io.on("connect", (socket) => {
    console.log(`Client has connected with id of ${socket.id}`)
});