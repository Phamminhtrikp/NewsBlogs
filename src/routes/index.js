const newsRouter = require('./news');
const meRouter = require('./me');
const blogPostsRouter = require('./blogPosts');
const siteRouter = require('./site');


function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/blogPosts', blogPostsRouter);

    app.use('/', siteRouter);
}

module.exports = route;