// routes/inscripcionesRoutes.js
const express = require("express");
const router = express.Router();
const inscripcionesController = require("../controllers/inscripcionesController");

// Ruta para obtener todas las inscripciones
router.get("/", inscripcionesController.obtenerInscripciones);

// Ruta para obtener las inscripciones de un usuario
router.get(
  "/usuario/:usuarioId",
  inscripcionesController.obtenerInscripcionesPorUsuario
);

module.exports = router;
