const db = require('../database'); // Conexión a la base de datos

// Controlador para guardar el quizz
const saveQuizAnswers = (req, res) => {
    const { respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9 } = req.body;

    const query = 'INSERT INTO respuesta (respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(query, [respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al guardar las respuestas' });
        }
        res.status(200).json({ message: 'Respuestas guardadas exitosamente' });
    });
};

module.exports = { saveQuizAnswers }; // Asegúrate de que esta línea esté presente
