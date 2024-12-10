// controllers/cursosController.js
const cursosModel = require("../models/cursosModel");

// Obtener todos los cursos
const obtenerCursos = async (req, res) => {
  try {
    const cursos = await cursosModel.getCursos();
    res.json(cursos);
  } catch (error) {
    console.error("Error al obtener los cursos", error);
    res.status(500).send("Error al obtener los cursos");
  }
};

// Obtener un curso por ID
const obtenerCursoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await cursosModel.getCursoById(id);
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).send("Curso no encontrado");
    }
  } catch (error) {
    console.error("Error al obtener el curso", error);
    res.status(500).send("Error al obtener el curso");
  }
};

module.exports = { obtenerCursos, obtenerCursoPorId };
