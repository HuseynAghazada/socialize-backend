const express = require('express');
const { createPost, getPosts, fetchPost, findFromPost, likePost, dislikePost, getHomePosts } = require('../controllers/postController');
const auth = require("../middleware/auth");
const router = express.Router();

router.post('/createPost', auth, createPost);
router.get('/getPosts/:_id', auth, getPosts);
router.get('/fetchPost/:post_id', auth, fetchPost);
router.get('/findFromPost/:post_id', auth, findFromPost);
router.post('/likePost/:post_id', auth, likePost);
router.post('/dislikePost/:post_id', auth, dislikePost);
router.get('/getHomePosts', auth, getHomePosts);

module.exports = router;