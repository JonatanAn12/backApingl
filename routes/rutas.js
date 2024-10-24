const express = require('express');
const { saveQuizAnswers } = require('../controllers/usuarioController'); // Verifica que el nombre sea correcto
const router = express.Router();

// Ruta para guardar respuestas del formulario
router.post('/submit', saveQuizAnswers);

module.exports = router;
