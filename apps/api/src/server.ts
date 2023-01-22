import express from 'express';
const app = express();
import os from 'os';
import cors from 'cors';

app.use(cors());

app.listen(8081, () => {
    console.log('API is online on port 8081');
});

app.get('/', (req, res) => {
    res.send('<h1>API is online</h1>');
});

app.get('/server-info', (req, res) => {
    res.json({
        platform: os.platform(),
        arch: os.arch(),
    });
});
