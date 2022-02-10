const newConnection = require('./src/SQL/databaseConnection');
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser("secret stuff"))

app.use(express.urlencoded({
  extended: true
}))

app.get('/user-login', (req, res) => {

let email = req.query.email;

let conn = newConnection();

conn.connect();
    conn.query(`SELECT * FROM Customer WHERE emailAddress = "${email}";`
    ,(err, rows, fields) =>{
        if(err)
            console.log(err)
        else
            console.log("Im working here RASHID")


    }
    
    )


})