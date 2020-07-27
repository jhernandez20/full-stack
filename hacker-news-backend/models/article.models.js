

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = Schema({
    title: String,
    author: String,
    status: Number,
    story_title: {
        type: String, unique: true
    },
    story_url: String,
    url: String,
    created_at: Date,
    object_id: String
}, { versionKey: false });

module.exports = mongoose.model('Article', ArticleSchema);