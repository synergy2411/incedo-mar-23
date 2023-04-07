const express = require("express");
require("./db")
const PostModel = require("./model/post.model");

const app = express();

app.use(express.json())

app.get("/api/posts", async (req, res) => {
    try {
        const allPosts = await PostModel.find()
        return res.send(allPosts);
    } catch (err) {
        return res.send(err)
    }
})

app.post("/api/posts", async (req, res) => {
    try {
        let newPost = new PostModel(req.body)
        const savedPost = await newPost.save()
        return res.send(savedPost);
    } catch (err) {
        return res.send(err)
    }
})


app.listen(9090, () => console.log("Server started at PORT : 9090"))


// GET -> Fetching all posts -> http://localhost:9090/api/posts
// POST -> Create the record in Database -> http://localhost:9090/api/posts + REQUEST BODY