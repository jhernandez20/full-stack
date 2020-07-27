
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/env.config');
const articleController = require('./controllers/articles.controller');
const port = process.env.PORT || 3789;

mongoose.Promise = global.Promise;

const options = {
    autoIndex: false,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true

};


mongoose.connect(`${config.mongodb.url_db}`, options)
    .then(() => {
        console.log('MongoDB is connected')
        app.listen(port, () => {
            console.log('Servidor local con node y express esta corriendo');
        });
        articleController.fillArticles();
    }).catch(err => console.log(`${config.mongodb.url_db}`)); 