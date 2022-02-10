const mysql = require('mysql');

let connection = mysql.createConnection({
    host: '104.155.146.37',
    user: 'root',
    password: 'password',
    database: 'projectDB'
});

connection.connect();

connection.query(`DROP TABLE Customer`, (err, rows, fields) => {
    if (err){
        console.log(err);
    }
    
    else{
        console.log('Table Dropped!');
    }
});

app.post('/update', function(req, res) {
    // Get sent data.
    var user = req.body;
    // Do a MySQL query.
    var query = connection.query('INSERT INTO Customer SET LevelOneTime = LevelOneTime + 1', user, function(err, result) { // update level one
    });

    res.end();
});
