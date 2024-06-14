const BlogPost = require('../models/blogPost');
class MeController {
    
    // [GET] /stored/blog
    storedBlogs(req, res, next) {

        Promise.all([BlogPost.find({}).sortable(req), BlogPost.countDocumentsWithDeleted({deleted: true})])
            .then(([blogPosts, deletedCount]) => {
                res.render('layouts/main', {content: '../me/stored-blogs', blogPosts, deletedCount, })
            })
            .catch(next);

        // BlogPost.countDocumentsWithDeleted({deleted: true})
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {})

        // BlogPost.find({})
        //     .then(blogPosts => res.render('layouts/main', {content: '../me/stored-blogs', blogPosts }))
        //     .catch(next);
        
    }

    // [GET] /trash/blog
    trashBlogs(req, res, next) {
        BlogPost.findWithDeleted({deleted: true})
            .then((blogPosts) => res.render('layouts/main', {content: '../me/trash-blogs', blogPosts }))
            .catch(next);
            
    }
}

module.exports = new MeController;