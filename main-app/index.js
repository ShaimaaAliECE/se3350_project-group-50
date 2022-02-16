const newConnection = require('./src/SQL/databaseConnection');
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser("secret stuff"))

app.use(express.urlencoded({
  extended: true
}))

app.post('/test', (req, res) => {
console.log("hi");
    })

app.get('/user-login', (req, res) => {
let email = req.params.email;
let conn = newConnection();
conn.connect();
    conn.query(`SELECT * FROM Customer WHERE emailAddress = "${email}";`
    ,(err, rows, fields) =>{
        if(err)
            console.log(err)
        else
            if(rows.length == 1){
                console.log("EMAIL EXISTS")
            }

            else if(rows.length == 0){
                    connection.query(`INSERT INTO Customer (emailAddress, LevelReached)
                                      VALUES ('${email}', 1)`
                    , (err, rows, fields) => {
                    if (err){
                        console.log(err);
                    }
                    
                    else{
                        response.send('Successfully inserted email');
                    }
                    });
                    connection.end();
            }
    }
    )
})

app.listen(80);