const express = require("express");
const { userValidation, idValidation } = require("../validation/validator");

const route = express.Router();

route.post("/", async (req, res) => {
  try {
    await userValidation(req.body);
    res.status(201).json("User created");
  } catch (err) {
    const errorMessage = err.message;
    return res.status(400).json({
      error: errorMessage,
    });
  }
});

route.get("/", (req, res) => {
  res.json([]).status(200);
});

route.get("/:userId", async (req, res) => {
  try {
    await idValidation(req.params);
    res.json({ userId: req.params });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

route.delete("/:userId", async (req, res) => {
  try {
    await idValidation(req.params);
    res.status(204).json({});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  route,
};
