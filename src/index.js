const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = new express();

app.use(express.json());

const storage = [];

app.post("employees/register", function (req, res) {
  const id = uuidv4();
  const { name, username, email } = req.body;

  const employeeAlreadyExists = storage.find(
    (employee) => employee.name === name
  );

  if (!employeeAlreadyExists) {
    throw new Error("Employee already exists");
  }

  const data = {
    id,
    name,
    username,
    email,
  };

  storage.push(data);

  return res.status(201).json(data);
});

app.get("/employees", function (req, res) {
  return res.json(storage);
});

app.get("/employees/:id", function (req, res) {
  const { id } = req.query;
  const employee = storage.find((employee) => employee.id === id);

  return res.json(employee);
});

app.listen(3333);
