import { application } from 'express';
import LevelOne from '../components/levels/LevelOne';


const mysql = require('mysql');
const app = express();

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

app.get('/leveltime', (res,req) =>{
var query = connection.query(`UPDATE Customer 
                              SET LevelOneTime = LevelOneTime + 1,
                              LevelTwoTime = LevelTwoTime + 1,
                              LevelThreeTime = LevelThreeTime + 1,
                              LevelFourTime = LevelFourTime + 1,
                              LevelFiveTime = LevelFiveTime + 1,`
        ,(err, rows, fields) => { 
            if (err){
                console.log(err);
        }

        else{
            }
    });
})


res.end();


connection.end();
