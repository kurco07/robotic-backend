// // routes/modulosRoutes.js
// const express = require("express");
// const router = express.Router();
// const modulosController = require("../controllers/modulosController");

// // Ruta para obtener todos los módulos
// router.get("/", modulosController.obtenerModulos);

// // Ruta para obtener un módulo por ID
// router.get("/:id", modulosController.obtenerModuloPorId);

// module.exports = router;

const express = require("express");
const {
  getModulos,
  crearModulo,
  editarModulo,
  eliminarModulo,
} = require("../controllers/modulosController");

const router = express.Router();

router.get("/", getModulos);
router.post("/", crearModulo);
router.put("/:id", editarModulo);
router.delete("/:id", eliminarModulo);

module.exports = router;
