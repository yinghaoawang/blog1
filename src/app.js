var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Welcome to RoyalsMinerva');
});


app.listen(3000, () => {
    console.log('Server listening on 3000');
});
