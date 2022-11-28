const express = require('express');
const { createComment, getUserFromComment } = require('../controllers/commentController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/createComment', auth, createComment);
router.get('/getUserFromComment/:comment_id', auth, getUserFromComment);

module.exports = router;