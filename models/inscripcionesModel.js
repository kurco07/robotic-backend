// models/inscripcionesModel.js
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Obtener todas las inscripciones
const getInscripciones = async () => {
  const result = await pool.query("SELECT * FROM inscripciones");
  return result.rows;
};

// Crear una nueva inscripción
const createInscripcion = async (usuario_id, curso_id) => {
  const result = await pool.query(
    "INSERT INTO inscripciones (usuario_id, curso_id) VALUES ($1, $2) RETURNING *",
    [usuario_id, curso_id]
  );
  return result.rows[0];
};

module.exports = { getInscripciones, createInscripcion };
