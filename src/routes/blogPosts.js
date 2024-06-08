const express = require('express');
const router = express.Router();


const blogPostController = require('../app/controllers/BlogPostController');

router.get('/:slug', blogPostController.show);

module.exports = router;