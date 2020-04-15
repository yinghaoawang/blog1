const express = require('express');
const app = express();
const config = require('./config');
const bcrypt = require('bcrypt');
const initializePassport = require('./passport.config.js');


// Alternative to connecting to a database
const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Bro' });
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        console.log(users);
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
});


app.listen(3000, () => {
    console.log('Server listening on 3000');
});
