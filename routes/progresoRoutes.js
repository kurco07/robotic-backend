// routes/progresoRoutes.js
const express = require("express");
const router = express.Router();
const progresoController = require("../controllers/progresoController");

// Ruta para obtener el progreso de todos los estudiantes
router.get("/", progresoController.obtenerProgreso);

// Ruta para obtener el progreso de un estudiante por usuarioId
router.get("/usuario/:usuarioId", progresoController.obtenerProgresoPorUsuario);

module.exports = router;
