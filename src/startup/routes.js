const express = require("express");
const indexRouter = require("../routes/index.js");
const apiRouter = require("../routes/api.js");
const userRouter = require("../routes/user.js");

module.exports = function(app) {
    app.use(express.json());
  
    app.use("/", indexRouter);
    app.use("/api", apiRouter);
    app.use("/user", userRouter);
  };