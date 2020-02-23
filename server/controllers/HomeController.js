const express = require("express");

class HomeController {
  path = "/";
  router = express.Router();
  constructor() {
    this.path = "/";
    this.router = express.Router();
    this.initRoutes();
  }

  initRoutes = () => {
    this.router.get("/", this.getHome);
  };

  getHome = (req, res) => {
    return res.json({
      example: "hello world"
    });
  };
}

module.exports = HomeController;
