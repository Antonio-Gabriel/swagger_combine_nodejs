const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");

const router = Router();

const storage = [];

router.post("/employees/register", function (req, res) {
  const { name, username, email } = req.body;

  const employeeAlreadyExists = storage.find(
    (employee) => employee.name === name
  );

  if (employeeAlreadyExists) {
    return res.status(400).json({
      message: "Employee Already Exists!",
    });
  }

  const data = {
    id: uuidv4(),
    name,
    username,
    email,
  };

  storage.push(data);

  return res.status(201).json(data);
});

router.get("/employees", function (req, res) {
  return res.json(storage);
});

router.get("/employees/:id", function (req, res) {
  const { id } = req.params;
  const employee = storage.find((employee) => employee.id === id);

  return res.json(employee);
});

module.exports = { router };
