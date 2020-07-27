const Article = require('../models/article.models');
const request = require("request");
const config = require('../config/env.config');
const options = config.optionsRequest;



function getArticles(req, res) {
    Article.find({ 'status': 0 }).sort({ created_at: 'desc' }).exec((err, articles) => {
        if (err) {
            res.status(500).send({
                message: 'Something broke.'
            });
        } else {
            if (!articles) {
                res.status(400).send({
                    message: 'Input parameters error.'
                });
            } else {
                res.status(200).send({
                    articles,
                    message: 'Loaded itemscorrectly.'
                });
            }
        }
    });
}


function deleteArticle(req, res) {
    let articleId = req.params.id;

    Article.findByIdAndUpdate(articleId, { status: 1 }, { new: true }, (err, articleUpdate) => {
        if (err) {
            res.status(500).send({
                message: 'Something broke.'
            });
        } else {
            if (!articleUpdate) {
                res.status(400).send({
                    message: 'Input parameters error.'
                });
            } else {
                res.status(200).send({
                    message: 'Item removed successfully.'
                });
            }
        }
    });
}

function fillArticles() {
    try {
        request(options, function (error, response, body) {
            if (error) {
                return console.log(err);
            }
            let hits = body.hits;

            hits.forEach(hit => {
                Article.findOne({ object_id: hit.objectID, story_title: hit.story_title }, (err, issetArticle) => {

                    if (err) {
                        console.log('Error checking article.', err);
                    } else {
                        if (!issetArticle) {

                            let article = new Article({
                                title: hit.title,
                                author: hit.author,
                                status: 0,
                                story_title: hit.story_title,
                                story_url: hit.story_url,
                                url: hit.url,
                                created_at: hit.created_at,
                                object_id: hit.objectID
                            });

                            article.save((err, hitStored) => {
                                if (err) {
                                    console.log('Error', err);
                                } else {
                                    if (!hitStored) {
                                        console.log('Could not save');
                                    } else {
                                        console.log('Saved');
                                    }
                                }
                            });
                        } else {
                            console.log('Exist');
                        }
                    }
                })
            });
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}


module.exports = {
    fillArticles,
    getArticles,
    deleteArticle
};