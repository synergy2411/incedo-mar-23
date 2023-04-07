const PostModel = require("../model/post.model");

const fetchAllPosts = async (req, res) => {
    try {
        const allPosts = await PostModel.find()
        return res.send(allPosts);
    } catch (err) {
        return res.send(err)
    }
}

const createPost = async (req, res) => {
    try {
        let newPost = new PostModel(req.body)
        const savedPost = await newPost.save()
        return res.send(savedPost);
    } catch (err) {
        return res.send(err)
    }
}

const fetchPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const fetchPost = await PostModel.findById(postId)
        if (!fetchPost) {
            return res.send({ message: "Unable to find the post" })
        }
        return res.send(fetchPost)
    } catch (err) {
        return res.send(err)
    }
}

const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const oldItem = await PostModel.findByIdAndUpdate(postId, { ...req.body })
        return res.send(oldItem);
    } catch (err) {
        return res.send(err)
    }
}

const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const deletedItem = await PostModel.findByIdAndDelete(postId)
        return res.send(deletedItem)
    } catch (err) {
        return res.send(err)
    }
}

module.exports = {
    fetchAllPosts,
    fetchPost,
    createPost,
    updatePost,
    deletePost
}