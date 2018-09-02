const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile('/static/index.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('READY');
});