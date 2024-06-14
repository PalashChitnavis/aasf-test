const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./model/User");
const getUsers = require("./controllers/getUsers");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
