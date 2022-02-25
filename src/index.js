const express = require("express");
const { v4 } = require("uuid");

const app = new express();


// EmployeeRegister

app.get("/", function (req, res) {
  return res.json({
    message: "Welcome to routes app",
  });
});

app.listen(3333);
