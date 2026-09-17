const mysql = require("mysql2/promise");
require("dotenv").config();

// Permite conectarse mediante URL completa (ej. Railway/Render) o por variables individuales (local)
const poolConfig = process.env.DATABASE_URL
  ? {
      uri: process.env.DATABASE_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    }
  : {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "seguria",
      port: Number(process.env.DB_PORT) || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    };

const pool = mysql.createPool(poolConfig);

// Helper para verificar la conexión al iniciar el servidor
async function checkDatabaseConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Conexión exitosa a la base de datos MySQL");
    connection.release();
  } catch (error) {
    console.error("⚠️ No se pudo conectar a la base de datos MySQL:", error.message);
    console.error("   Verifica que el servicio MySQL esté iniciado y las credenciales en .env sean correctas.");
  }
}

module.exports = {
  pool,
  checkDatabaseConnection,
};
