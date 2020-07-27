
const express = require('express');
const cron = require("node-cron");
const bodyparser = require('body-parser');
const app = express();
const method = require('./controllers/articles.controller');
// cargar rutas
const articles_routes = require('./routes/articles.route');


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//configurar cabeceras y cors
app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


// rutas base
app.use('/api/v1', articles_routes);

// error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.json(err);
});


cron.schedule("0 * * * *", function () {
  method.fillArticles();
  console.log("running a task  hour" + new Date());

});

module.exports = app;