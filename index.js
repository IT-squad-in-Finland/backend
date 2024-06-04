import express from 'express';

const app = express();
const port = 8080;

app.get('/', (r, res) => {
    res.send('ok')
})


app.listen(port, () => {
    console.log(`server started: http://localhost:${port}`);
})