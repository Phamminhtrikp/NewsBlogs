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

    // [GET] /register
    register(req, res) {
        res.render('layouts/main', {content: '../auth/register'});
    }
}

module.exports = new SiteController;