const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

require("./models/CalanderData"); //
const router = require("./routes/routes");

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server YEY!" });
});

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server YEY ME!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

const mongoURI =
  "mongodb+srv://heartsong:w6EOdl2n3zKzDozn@heartsong-data-cluster.oibwy7f.mongodb.net/?retryWrites=true&w=majority"; //

const conn = mongoose.createConnection(mongoURI);

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

conn.once("open", () => {
  console.log("Connection Successful");
});

conn.on("error", console.error.bind(console, "MongoDB connection error:"));

// DONT DELETE!
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Express running PORT ${PORT}`);
});

