const express = require('express');
const router = express.Router();


const blogPostController = require('../app/controllers/BlogPostController');

router.get('/create', blogPostController.create);
router.post('/store', blogPostController.store);
router.get('/:id/edit', blogPostController.edit);
router.post('/handle-form-actions', blogPostController.handleFormActions);
router.put('/:id', blogPostController.update);
router.patch('/:id/restore', blogPostController.restore);
router.delete('/:id', blogPostController.destroy);
router.delete('/:id/force', blogPostController.forceDestroy);
router.get('/:slug', blogPostController.show);

module.exports = router;