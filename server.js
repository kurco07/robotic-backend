// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Configuración del entorno
dotenv.config();

// Crear la app de Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar las rutas
const usuarioRoutes = require("./routes/usuariosRoutes");
const cursosRoutes = require("./routes/cursosRoutes");
const inscripcionesRoutes = require("./routes/inscripcionesRoutes");
const modulosRoutes = require("./routes/modulosRoutes");
const progresoRoutes = require("./routes/progresoRoutes");

// Rutas de la API
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/inscripciones", inscripcionesRoutes);
app.use("/api/modulos", modulosRoutes);
app.use("/api/progreso", progresoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
