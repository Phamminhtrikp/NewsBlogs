const blogPost = require('../models/blogPost');
const BlogPost = require('../models/blogPost');

class BlogPostController {
   
    // [GET] /blogposts/:slug
    show(req, res, next) {
        BlogPost.findOne({slug: req.params.slug})
        .then( blogPost => {
            res.render('layouts/main', {content: '../blogPosts/show', blogPost});
        })
        .catch(next);
        
        // res.send('blog post detail - ' + req.params.slug);
    }
}

module.exports = new BlogPostController;