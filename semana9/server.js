const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

app.get('/estado', (req, res) => {
  res.send('Servidor en estado OK');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
