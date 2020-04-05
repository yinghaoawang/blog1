var express = require('express');
var app = express();
var config = require('./config');

app.get('/', (req, res) => {
    res.send('Welcome to RoyalsMinerva');
});


app.listen(3000, () => {
    console.log('Server listening on 3000');
});
