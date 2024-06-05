import express from 'express';
import mysql from 'mysql';

const app = express();
const port = 8080;

const dbc=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'forum'
})
dbc.connect(e=>{
    if(e)throw e;
    console.log('mysql connected');
});
app.get('/', (r, res) => {
    dbc.query('select * from users',(e,vs)=>{
        if(e){
            console.log(e);
            return;
        }
        console.log(`users: ${vs}`);
    })
    res.send('ok')
})


app.listen(port, () => {
    console.log(`server started: http://localhost:${port}`);
})