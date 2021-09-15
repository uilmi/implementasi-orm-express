const express = require('express');
const app = express();
const { Article } = require('./models');

const PORT = 3000;
const LOCALHOST = 'http://localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.post('/articles', (req, res) => {
    Article.create({
        title: req.body.title,
        body: req.body.body,
        approved: true
    })
        .then(article => {
            res.send('Article berhasil dibuat');
            // res.redirect('/articles');
        })
})

app.get('/articles/create', (req, res) => {
    res.render('articles/create');
})

app.get('/articles/', (req, res) => {
    Article.findAll().then(article => {
        res.status(200).json(article);
    })
})

app.listen(PORT, () => {
    console.log(`Server ready -> ${LOCALHOST}:${PORT}`);
})