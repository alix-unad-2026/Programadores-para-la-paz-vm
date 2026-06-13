const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/registro', (req, res) => {
  const { nombre, mensaje } = req.body;
  res.json({ estado: 'Datos recibidos', nombre, mensaje });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
