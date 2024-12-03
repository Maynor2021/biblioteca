const express = require('express');
const app = express();
const path = require('path');

// Configuración del puerto
app.set('port', 3000);

// Ruta principal que responde con un mensaje
app.get('/', (req, res) => {
    res.send('Bienvenido');
});

// Middleware para servir archivos estáticos desde la carpeta "public"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor en el puerto especificado
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});
