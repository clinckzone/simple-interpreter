const express = require("express");
const server = express();

server.use("/scripts", express.static(__dirname + "/scripts"));

server.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

server.listen(port, function () {
  console.log("Server is running on " + port);
});