// routes/cursosRoutes.js
const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursosController");

// Ruta para obtener todos los cursos
router.get("/", cursosController.obtenerCursos);

// Ruta para obtener un curso por ID
router.get("/:id", cursosController.obtenerCursoPorId);

module.exports = router;
