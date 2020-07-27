const express = require('express');
const ArticlesController = require('../controllers/articles.controller');
const api = express.Router();

api.get('/articles', ArticlesController.getArticles);
api.put('/article/:id', ArticlesController.deleteArticle);


module.exports = api;
