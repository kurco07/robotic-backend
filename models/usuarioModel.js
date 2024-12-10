// models/usuarioModel.js
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Obtener todos los usuarios
const getUsuarios = async () => {
  const result = await pool.query("SELECT * FROM usuarios");
  return result.rows;
};

// Obtener un usuario por ID
const getUsuarioById = async (id) => {
  const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
  return result.rows[0];
};

// Crear un nuevo usuario
const createUsuario = async (nombre, correo, contraseña, tipo_usuario) => {
  const result = await pool.query(
    "INSERT INTO usuarios (nombre, correo, contraseña, tipo_usuario) VALUES ($1, $2, $3, $4) RETURNING *",
    [nombre, correo, contraseña, tipo_usuario]
  );
  return result.rows[0];
};

module.exports = { getUsuarios, getUsuarioById, createUsuario };
