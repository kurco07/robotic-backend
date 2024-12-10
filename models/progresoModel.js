// models/progresoModel.js
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Obtener el progreso de un usuario en un curso
const getProgreso = async (usuario_id, curso_id) => {
  const result = await pool.query(
    "SELECT * FROM progreso WHERE usuario_id = $1 AND curso_id = $2",
    [usuario_id, curso_id]
  );
  return result.rows[0];
};

// Actualizar el progreso de un usuario en un curso
const updateProgreso = async (usuario_id, curso_id, avance) => {
  const result = await pool.query(
    "UPDATE progreso SET avance = $1 WHERE usuario_id = $2 AND curso_id = $3 RETURNING *",
    [avance, usuario_id, curso_id]
  );
  return result.rows[0];
};

// Crear un nuevo registro de progreso
const createProgreso = async (usuario_id, curso_id, avance) => {
  const result = await pool.query(
    "INSERT INTO progreso (usuario_id, curso_id, avance) VALUES ($1, $2, $3) RETURNING *",
    [usuario_id, curso_id, avance]
  );
  return result.rows[0];
};

module.exports = { getProgreso, updateProgreso, createProgreso };
