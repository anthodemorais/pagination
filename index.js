const express = require('express'),
    bodyParser = require('body-parser'),
    filmsRouter = require('./routes/films');

const app = express(),
    server = require('http').createServer(app);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json())

app.use(filmsRouter)

server.listen(3000);