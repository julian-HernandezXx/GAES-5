const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    servicio: "SegurIA API",
    fecha: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`SegurIA API escuchando en http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/health`);
});
