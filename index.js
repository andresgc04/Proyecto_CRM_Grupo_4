const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("assets"));
app.use(express.static("node_modules"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/dashboard/index.html"));
});

app.get("/costumer", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/costumer/index.html"));
});

app.get("/newCostumer", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/costumer/newCostumer.html"));
});

app.get("/editCostumer", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/costumer/editCostumer.html"));
});

app.listen(3000);
console.log("http://localhost:3000");
