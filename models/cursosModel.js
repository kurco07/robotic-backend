// models/cursosModel.js
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Obtener todos los cursos
const getCursos = async () => {
  const result = await pool.query("SELECT * FROM cursos");
  return result.rows;
};

// Obtener un curso por ID
const getCursoById = async (id) => {
  const result = await pool.query("SELECT * FROM cursos WHERE id = $1", [id]);
  return result.rows[0];
};

// Crear un nuevo curso
const createCurso = async (nombre, descripcion, precio) => {
  const result = await pool.query(
    "INSERT INTO cursos (nombre, descripcion, precio) VALUES ($1, $2, $3) RETURNING *",
    [nombre, descripcion, precio]
  );
  return result.rows[0];
};

module.exports = { getCursos, getCursoById, createCurso };
