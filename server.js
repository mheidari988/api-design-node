// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const fs = require('fs');
const app = express();
var jsonData = { count: 12, message: 'hey' };

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) {
            res.sendStatus(500);
        }
    })
});

app.get('/fs', (req, res) => {
    fs.readFile('index.html', (err, buffer) => {
        if (err) {
            res.sendStatus(500);
        }
        res.setHeader('Content-Type', 'text/html');
        res.send(buffer.toString());
    });
});

app.get('/data', (req, res) => {
    res.json(jsonData);
})

app.listen(3000, () => {
    console.log('listening on port http://localhost:3000');
})