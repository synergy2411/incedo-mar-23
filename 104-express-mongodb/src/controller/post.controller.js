const PostModel = require("../model/post.model");

const fetchAllPosts = async (req, res) => {
    try {
        const allPosts = await PostModel.find()
        const transformedPost = allPosts.map(post => {
            return { id: post._doc._id, title: post._doc.title, body: post._doc.body }
        })
        return res.send(transformedPost);
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
        return res.send({ id: fetchPost._doc._id, title: fetchPost._doc.title, body: fetchPost._doc.body })
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