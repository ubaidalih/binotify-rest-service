const express = require("express");
const loaders = require("./loaders");
var bodyParser = require('body-parser');
const path = require('path');

loaders(express()).then(async (app) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use("/api", require("./routes"));
  app.use(express.static(path.join(__dirname, '../public')));

  app.listen(process.env.PORT, async () => {
    console.log(
      `REST Service is up and running on port ${process.env.PORT}.`
    );
  });
});