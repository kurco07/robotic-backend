const express = require("express");
const { autenticarUsuario } = require("../controllers/authController");
const router = express.Router();

router.post("/login", autenticarUsuario);
router.post("/register", registrarUsuario);

module.exports = router;
