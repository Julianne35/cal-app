const mongoose = require("mongoose");
const express = require("express"); 
const app = express(); 
const cors = require("cors");
const logger = require("morgan");


require('./models/CalanderData');  //

const router = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

const mongoURI = 
"mongodb+srv://heartsong:w6EOdl2n3zKzDozn@heartsong-data-cluster.oibwy7f.mongodb.net/?retryWrites=true&w=majority"  //

const conn = mongoose.createConnection(mongoURI);

mongoose.connect( mongoURI, 
    {useNewUrlParser: true}, 
    {useUnifiedTopology: true});

conn.once('open', () => {
    console.log('Connection Successful')
  })

conn.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", router);

const server = app.listen(3001, () => {
    console.log(`Express running PORT ${server.address().port}`);
  });