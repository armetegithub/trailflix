const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/signin", (req, res) => {
  res.send("Página de ingreso");
});

router.get("/signup", (req, res) => {
  res.send("Formulario de autenticackión ");
});
module.exports = router;
