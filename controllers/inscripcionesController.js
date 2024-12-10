// controllers/inscripcionesController.js
const inscripcionesModel = require("../models/inscripcionesModel");

// Obtener todas las inscripciones
const obtenerInscripciones = async (req, res) => {
  try {
    const inscripciones = await inscripcionesModel.getInscripciones();
    res.json(inscripciones);
  } catch (error) {
    console.error("Error al obtener las inscripciones", error);
    res.status(500).send("Error al obtener las inscripciones");
  }
};

// Obtener las inscripciones de un usuario
const obtenerInscripcionesPorUsuario = async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const inscripciones = await inscripcionesModel.getInscripcionesByUsuarioId(
      usuarioId
    );
    res.json(inscripciones);
  } catch (error) {
    console.error("Error al obtener las inscripciones", error);
    res.status(500).send("Error al obtener las inscripciones");
  }
};

module.exports = { obtenerInscripciones, obtenerInscripcionesPorUsuario };
