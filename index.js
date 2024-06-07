import express from 'express';
import mysql from 'mysql';
import fs from 'fs';

const app = express();
const port = 8080;

const dbc = mysql.createConnection({
    host: '127.0.0.1',
    user: 'forum',
    password: '12345678',
    database: 'forum'
})

dbc.connect(e => {
    if (e) throw e;
    console.log('mysql connected');
});

// database init
fs.readFile('db/init.sql', (e, d) => {
    console.log(d);
})

app.get('/', (r, res) => {
    dbc.query('select * from users', (e, vs) => {
        if (e) {
            console.log(e);
            return;
        }
        res.send(`ok: ${JSON.stringify(vs)}`)
    })
})

app.listen(port, () => {
    console.log(`server started: http://localhost:${port}`);
})