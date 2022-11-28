const Comments = require('../models/commentModel');
const Posts = require('../models/postModel');

module.exports.createComment = async (req, res) => {
    try {
        const { postId, content, tag, reply } = req.body;
        const newComment = new Comments({ user: req.user._id, content, tag, reply });
        await Posts.findOneAndUpdate({ _id: postId }, {
            $push: { comments: newComment._id }
        }, { new: true });
        await newComment.save();
        return res.status(200).json({ msg: 'Success', newComment });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports.getUserFromComment = async (req, res) => {
    try {
        const comment = await Comments.findOne({ _id: req.params.comment_id })
            .populate("user")
            .select("-password");
        if (!comment) res.status(400).json({ msg: 'No comment found' });
        return res.status(200).json({ msg: 'Success', comments: comment._doc });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};