const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./model/User");
const getUsers = require("./controllers/getUsers");
const cors = require("cors");
const getUserByID = require("./controllers/getUserByID");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//getUserByID -> /:palash  /api/users/1234 req.params = {palash: 1234}

app.get("/api/users/:id", (req, res) => {
  getUserByID(req, res);
});

app.get("/api/users", async (req, res) => {
  getUsers(req, res);
});

app.get("/health", (req, res) => {
  console.log("server is running");
  res.send("server is running");
});

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("db connected");
    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch((e) => {
    console.log("error");
  });
