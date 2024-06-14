const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const BlogPost = new Schema({
    author: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    tag: { type: String },
    urlToImage: { type: String },
    content: { type: String },
    slug: { type: String, slug: 'title', unique: true },

}, { timestamps: true });

// Add plugins
mongoose.plugin(slug);
BlogPost.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true, });

module.exports = mongoose.model('BlogPost', BlogPost);