const express = require("express");
const routes = require("../routes");
const bodyParser = require("body-parser");

const server = express();
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use("/api", routes);

module.exports = server;
