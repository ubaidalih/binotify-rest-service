const express = require("express");
const loaders = require("./loaders");
const port = 3000;

loaders(express()).then(async (app) => {
  app.use("/api", require("./routes"));

  app.listen(port, async () => {
    console.log(
      `REST Service is up and running on port ${port}.`
    );
  });
});