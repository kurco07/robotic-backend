const bcrypt = require("bcrypt"); // Si estás utilizando contraseñas encriptadas
const pool = require("../db/index"); // Configuración de la base de datos

// Controlador para autenticar al usuario
const autenticarUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario por su correo electrónico
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const usuario = result.rows[0];

    // Comparar la contraseña enviada con la almacenada (asegúrate de usar bcrypt para encriptar contraseñas)
    const isPasswordCorrect = await bcrypt.compare(password, usuario.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Enviar datos del usuario, incluyendo su rol
    res.json({ id: usuario.id, email: usuario.email, role: usuario.role });
  } catch (error) {
    console.error("Error al autenticar usuario:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = { autenticarUsuario };
