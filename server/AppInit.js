"use strict";

// -- Import Modules -- //
const EshopApp = require("./app.js");
const bodyParser = require("body-parser");
const logger = require("./middlewares/logger");

const HomeController = require("./controllers/HomeController");

const app = new EshopApp({
  port: 9793,
  controllers: [new HomeController()],
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    logger
  ]
});

app.listen();
