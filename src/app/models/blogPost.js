const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogPost = new Schema({
    author: { type: String },
    title: { type: String },
    description: { type: String },
    tag: { type: String },
    ulrToImage: { type: String },
    publishedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    content: { type: String },
    slug: {type: String}
});

module.exports = mongoose.model('BlogPost', BlogPost);