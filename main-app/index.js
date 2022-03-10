const newConnection = require('./src/SQL/databaseConnection');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express()
app.use(cookieParser("secret stuff"))
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}))

app.get('/test', (req, res) => {
    res.json({
        "email1": "test@hotmail.com",
        "email2": "test2@hotmail.com"
    })
})

app.post('/test2', (req, res) => {
    console.log(req.body.email);
    res.send(req.body.email);
})

app.post('/user-login', (req, res) => {
let email = req.body.email;
let conn = newConnection();
conn.connect();
    conn.query(`SELECT * FROM Customer WHERE emailAddress = "${email}";`
    ,(err, rows, fields) =>{
        if(err)
            console.log(err)
        else{
            if(rows.length == 1){
                res.send(`${rows[0].LevelReached}`);
            }

            else if(rows.length == 0){
                    conn.query(`INSERT INTO Customer (emailAddress, LevelReached)
                                      VALUES ('${email}', 1)`
                    , (err, rows, fields) => {
                    if (err){
                        console.log(err);
                    }
                    
                    else{
                        res.send("1");
                    }
                    });
                    conn.end();
            }
        }
    }
    )
})

app.post("/level-completion", (req, res) => {

    console.log(req.body.email)

    let conn = newConnection();
    let completedLevel = req.body.completedLevel
    let email = req.body.email
    conn.connect();
        conn.query(`SELECT LevelReached FROM Customer WHERE emailAddress = "${email}";`
        ,(err, rows, fields) =>{
            if (err){
                console.log(err);
            }
            else{
                for (r of rows) {
                    if(completedLevel == r.LevelReached){
                        conn.query(`UPDATE Customer SET LevelReached = LevelReached + 1
                                    WHERE emailAddress = "${email}";`
                        ,(err, rows, fields) =>{
                        if (err){
                            console.log(err);
                        }
    
                        else{
                            console.log("Successfully update current level " + r.LevelReached)
                        }
                        })
                    }  
                    console.log(r.LevelReached)
                    conn.end(); 
                }  
        }
    })
    //console.log(completedLevel)
})

app.listen(80);