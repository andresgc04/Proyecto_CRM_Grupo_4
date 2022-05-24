const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/dashboard", function(req, res){
    res.sendFile(path.join(__dirname + "/views/dashboard/index.html"));
});

app.listen(3000);
console.log("http://localhost:3000");