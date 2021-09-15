const { Article } = require('./models');

Article.create({
    title: 'Hello Binar!',
    body: 'Lorem ipsum bla bla bla',
    approved: true
}).then(article => {
    console.log(article);
})