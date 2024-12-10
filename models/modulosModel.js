// models/modulosModel.js
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Obtener todos los módulos
const getModulos = async () => {
  const result = await pool.query("SELECT * FROM modulos");
  return result.rows;
};

// Obtener un módulo por ID
const getModuloById = async (id) => {
  const result = await pool.query("SELECT * FROM modulos WHERE id = $1", [id]);
  return result.rows[0];
};

// Crear un nuevo módulo
const createModulo = async (nombre, descripcion, curso_id) => {
  const result = await pool.query(
    "INSERT INTO modulos (nombre, descripcion, curso_id) VALUES ($1, $2, $3) RETURNING *",
    [nombre, descripcion, curso_id]
  );
  return result.rows[0];
};

module.exports = { getModulos, getModuloById, createModulo };
