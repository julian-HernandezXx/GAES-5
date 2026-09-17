const express = require("express");
const bcrypt = require("bcryptjs");
const { pool } = require("../config/db");

const router = express.Router();

/**
 * POST /api/auth/register
 * Registra un nuevo usuario con contraseña hasheada (bcrypt)
 */
router.post("/register", async (req, res) => {
  try {
    const { nombre, correo, clave, password } = req.body;

    // Aceptamos 'clave' o 'password' para máxima compatibilidad
    const userPassword = clave || password;

    // 1. Validar campos requeridos
    if (!nombre || !nombre.trim()) {
      return res.status(400).json({ error: "El nombre es obligatorio." });
    }
    if (!correo || !correo.trim()) {
      return res.status(400).json({ error: "El correo es obligatorio." });
    }
    if (!userPassword || typeof userPassword !== "string") {
      return res.status(400).json({ error: "La contraseña es obligatoria." });
    }

    const cleanNombre = nombre.trim();
    const cleanCorreo = correo.trim().toLowerCase();

    // 2. Validar formato básico de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanCorreo)) {
      return res.status(400).json({ error: "El formato de correo no es válido." });
    }

    // 3. Validar longitud mínima de la contraseña
    if (userPassword.length < 6) {
      return res.status(400).json({
        error: "La contraseña debe tener al menos 6 caracteres.",
      });
    }

    // 4. Verificar si el correo ya está registrado en la base de datos
    const [usuariosExistentes] = await pool.query(
      "SELECT id FROM usuarios WHERE correo = ? LIMIT 1",
      [cleanCorreo]
    );

    if (usuariosExistentes.length > 0) {
      return res.status(409).json({
        error: "El correo electrónico ya se encuentra registrado.",
      });
    }

    // 5. Hashear la contraseña con bcrypt (cost factor: 10 salt rounds)
    // NUNCA se almacena la contraseña en texto plano
    const saltRounds = 10;
    const clave_hash = await bcrypt.hash(userPassword, saltRounds);

    // 6. Insertar el nuevo usuario en MySQL
    const [resultado] = await pool.query(
      "INSERT INTO usuarios (nombre, correo, clave_hash) VALUES (?, ?, ?)",
      [cleanNombre, cleanCorreo, clave_hash]
    );

    // 7. Responder con éxito y datos seguros (sin devolver el hash de la clave)
    return res.status(201).json({
      mensaje: "Usuario registrado con éxito.",
      usuario: {
        id: resultado.insertId,
        nombre: cleanNombre,
        correo: cleanCorreo,
        fecha_registro: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error en /api/auth/register:", error);
    return res.status(500).json({
      error: "Error interno del servidor al procesar el registro.",
      detalle: error.message,
    });
  }
});

module.exports = router;
