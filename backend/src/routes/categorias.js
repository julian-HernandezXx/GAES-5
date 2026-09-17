const express = require("express");
const { pool } = require("../config/db");

const router = express.Router();

// GET /api/categorias - Obtener todas las categorías disponibles
router.get("/", async (_req, res) => {
  try {
    const [categorias] = await pool.query(
      "SELECT id, nombre FROM categorias ORDER BY id ASC"
    );
    res.json(categorias);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({
      error: "Error interno del servidor al obtener las categorías",
      detalle: error.message,
    });
  }
});

module.exports = router;
