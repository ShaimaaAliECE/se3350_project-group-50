const mysql = require('mysql');

function establishConnection(){
    let connection = mysql.createConnection({
        host: '104.155.146.37',
        user: 'root',
        password: 'password',
        database: 'projectDB'
    });

    return connection;
}

module.exports = establishConnection;