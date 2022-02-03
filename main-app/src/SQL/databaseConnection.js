const mysql = require('mysql');

function establishConnection(){
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'mergesort'
    });

    return connection;
}

module.exports = establishConnection;