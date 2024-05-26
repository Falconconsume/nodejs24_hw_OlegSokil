const express = require("express");
const { userValidation, idValidation } = require("../validation/validator");

const route = express.Router();

route.post("/", userValidation, (req, res) => {
  res.status(201).json("User created");
});

route.get("/", (req, res) => {
  res.json([]).status(200);
});

route.get("/:userId", idValidation, async (req, res) => {
  res.json(req.params);
});

route.delete("/:userId", idValidation, async (req, res) => {
  res.status(204).json({});
});

route.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

module.exports = {
  route,
};
