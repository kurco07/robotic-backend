// controllers/modulosController.js
const modulosModel = require("../models/modulosModel");

// Obtener todos los módulos
const obtenerModulos = async (req, res) => {
  try {
    const modulos = await modulosModel.getModulos();
    res.json(modulos);
  } catch (error) {
    console.error("Error al obtener los módulos", error);
    res.status(500).send("Error al obtener los módulos");
  }
};

// Obtener un módulo por ID
const obtenerModuloPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const modulo = await modulosModel.getModuloById(id);
    if (modulo) {
      res.json(modulo);
    } else {
      res.status(404).send("Módulo no encontrado");
    }
  } catch (error) {
    console.error("Error al obtener el módulo", error);
    res.status(500).send("Error al obtener el módulo");
  }
};

module.exports = { obtenerModulos, obtenerModuloPorId };
