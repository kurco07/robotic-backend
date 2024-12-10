// routes/usuariosRoutes.js
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");

// Ruta para obtener todos los usuarios
router.get("/", usuarioController.obtenerUsuarios);

// Ruta para obtener un usuario por ID
router.get("/:id", usuarioController.obtenerUsuarioPorId);

module.exports = router;
