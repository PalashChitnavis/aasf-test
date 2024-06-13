const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  console.log(request);
  response.send("hello world");
});

app.get("/users", (req, res) => {
  const data = fs.readFileSync("./data.txt");
  res.send(data);
});

app.post("/users", (req, res) => {
  fs.appendFileSync("./data.txt", JSON.stringify(req.body));
  res.send(req.body);
});

app.listen(port, () => {
  console.log("server started on port 3000");
});
