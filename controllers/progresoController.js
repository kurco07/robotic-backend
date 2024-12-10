// controllers/progresoController.js
const progresoModel = require("../models/progresoModel");

// Obtener el progreso de todos los estudiantes
const obtenerProgreso = async (req, res) => {
  try {
    const progreso = await progresoModel.getProgreso();
    res.json(progreso);
  } catch (error) {
    console.error("Error al obtener el progreso", error);
    res.status(500).send("Error al obtener el progreso");
  }
};

// Obtener el progreso de un estudiante por usuarioId
const obtenerProgresoPorUsuario = async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const progreso = await progresoModel.getProgresoByUsuarioId(usuarioId);
    res.json(progreso);
  } catch (error) {
    console.error("Error al obtener el progreso", error);
    res.status(500).send("Error al obtener el progreso");
  }
};

module.exports = { obtenerProgreso, obtenerProgresoPorUsuario };
