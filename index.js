const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/rutas'); // Cambia la ruta según tu estructura de carpetas


const app = express();
const port = 3001;

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors()); // Habilita CORS


// Usar las rutas
app.use('/api/quizz', routes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

