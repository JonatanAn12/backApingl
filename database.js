const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'localhost', // Cambia 'localhost3306' a 'localhost'
    user: 'root',
    password: 'Js25112005-',
    database: 'morichal2',
    port: 3306 // Si quieres especificar el puerto, añade esta línea (opcional)
});

database.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports = database;
