const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
let reportes = [];
const server = http.createServer((req, res) => {
  if (req.url === '/reportes' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(reportes));
  } else if (req.url === '/reportes' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const reporte = JSON.parse(body);
      reporte.id = reportes.length + 1;
      reportes.push(reporte);
      res.writeHead(201, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({mensaje: 'Reporte registrado', reporte}));
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Ruta no encontrada');
  }
});
server.listen(PORT, () => console.log('Servidor ejecutándose en puerto ' + PORT));
