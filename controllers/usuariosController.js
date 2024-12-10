// controllers/usuariosController.js
const usuarioModel = require("../models/usuarioModel");

// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.getUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).send("Error al obtener los usuarios");
  }
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await usuarioModel.getUsuarioById(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).send("Error al obtener el usuario");
  }
};

module.exports = { obtenerUsuarios, obtenerUsuarioPorId };
