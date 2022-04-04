const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const app = express();
const mysql= require("mysql");



const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "kpopDataBase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extend: true}))


app.get('/api/get', (req,res) =>{
    const sqlSelect = "SELECT * FROM song_tb"
    db.query(sqlSelect, (err,result) =>{
        res.send(result);
    })

})

app.post('/api/insert', (req,res)=>{

const songName = req.body.songName
const groupName = req.body.groupName


    const sqlInsert = "INSERT INTO song_tb (songName, groupName) VALUES (?,?)";
    db.query(sqlInsert, [songName, groupName], (err, result)=>{
        console.log(result);
    })

    
    
});

app.listen(3001, () =>{
    console.log ("running on port 3001");
});