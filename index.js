const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/connection");
const User = require("./routes/UserRouter");

const server = express();

// Middleware
server.use(cors({ origin: "*" }));
server.use(bodyParser.json());

// CONNECT DATABASE FIRST
connectDB();

// Routes
server.use("/users", User);

server.get("/", (req, res) => {
  res.send("hello");
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
