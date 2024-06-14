// const blogPost = require('../models/blogPost');
const BlogPost = require('../models/blogPost');

class BlogPostController {

    // [GET] /blogposts/:slug
    show(req, res, next) {
        BlogPost.findOne({ slug: req.params.slug })
            .then(blogPost => {
                res.render('layouts/main', { content: '../blogPosts/show', blogPost });
            })
            .catch(next);

        // res.send('blog post detail - ' + req.params.slug);
    }

    // [GET] /blogposts/create
    create(req, res, next) {
        res.render('layouts/main', { content: '../blogPosts/create' })
    }


    // [POST] /blogposts/store
    store(req, res, next) {

        const blog = new BlogPost(req.body);

        blog.save()
            .then(() => res.redirect('/me/stored/blogs'))
            .catch(error => {

            });

        // res.send('Blog saved');
    }

    
    // [GET] /blogposts/:id/edit
    edit(req, res, next) {
        BlogPost.findById(req.params.id)
            .then(blogPost => res.render('layouts/main', { content: '../blogPosts/edit', blogPost }))
            .catch(next);
    }

    // [PUT] /blogposts/:id
    update(req, res, next) {
        BlogPost.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/blogs'))
            .catch(next);
    }
    
    // [DELETE] /blogposts/:id
    destroy(req, res, next) {
        BlogPost.delete({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }

    // [DELETE] /blogposts/:id/force
    forceDestroy(req, res, next){
        BlogPost.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }
        
    // [PATCH] /blogposts/:id/restore
    restore(req, res, next) {
        BlogPost.restore({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }

    // [POST] /blogPosts/handle-form-actions 
    handleFormActions(req, res, next) {
        
        switch(req.body.action) {
            case 'delete':
                BlogPost.delete({ _id: {$in: req.body.blogPostIDs} })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json(req.body); // {message: 'Action is invalid!'}
                break;
        }
    }
}
        
module.exports = new BlogPostController;