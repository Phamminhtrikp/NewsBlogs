const BlogPost = require('../models/blogPost');
class SiteController {
    // [GET] /
    index(req, res, next) {

        BlogPost.find({})
        .then(BlogPosts => res.render('layouts/main', {content: '../home', BlogPosts}))
        .catch(next);

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;