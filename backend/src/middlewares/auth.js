const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "seguria_secret_key_default_2026";

/**
 * Middleware para proteger rutas privadas con JWT
 * Espera el encabezado: Authorization: Bearer <token>
 */
function requireAuth(req, res, next) {
  const authHeader = req.headers["authorization"] || req.headers["Authorization"];

  if (!authHeader) {
    return res.status(401).json({
      error: "Acceso no autorizado. Token no proporcionado.",
    });
  }

  // El formato debe ser "Bearer <token>"
  const partes = authHeader.split(" ");
  if (partes.length !== 2 || partes[0] !== "Bearer") {
    return res.status(401).json({
      error: "Formato de token inválido. Use: Bearer <token>",
    });
  }

  const token = partes[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Guardamos los datos del usuario en la request para uso de las rutas siguientes
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        error: "El token ha expirado. Por favor, inicia sesión nuevamente.",
      });
    }
    return res.status(401).json({
      error: "Token inválido o corrupto.",
    });
  }
}

module.exports = {
  requireAuth,
  JWT_SECRET,
};
