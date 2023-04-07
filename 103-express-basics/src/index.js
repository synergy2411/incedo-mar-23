const express = require("express");
const { v4 } = require("uuid");
const app = express()

const posts = [
    { id: "p001", title: "React for Beginners", body: "awesome book" },
    { id: "p002", title: "Mastering React", body: "I like this book 👍" },
    { id: "p003", title: "React 101", body: "Not that bad book" },
]

app.use(express.json());        // Middleware to parse the request body

app.patch("/posts/:postId", (req, res) => {
    const { postId } = req.params;
    const position = posts.findIndex(post => post.id === postId)
    if (position === -1) {
        return res.send({ error: `Unable to update. ID ${postId} not found.` })
    }
    posts[position] = { ...posts[position], ...req.body }
    return res.send(posts[position]);
})

app.delete("/posts/:postId", (req, res) => {
    const { postId } = req.params;
    const position = posts.findIndex(post => post.id === postId)
    if (position === -1) {
        return res.send({ error: `Unable to delete the item for id - ${postId}` })
    }
    const [deletedItem] = posts.splice(position, 1)
    return res.send(deletedItem)
})

app.post("/posts", (req, res) => {
    let newPost = {
        id: v4(),
        ...req.body
    }
    posts.push(newPost);
    return res.send(newPost)
})

app.get("/posts/:postId", (req, res) => {
    const { postId } = req.params;          // { postId : "p001" }
    const position = posts.findIndex(post => post.id === postId)
    if (position === -1) {
        return res.send({ error: "Unable to find the post for ID - " + postId })
    }
    return res.send(posts[position])
})

app.get("/posts", (req, res, next) => {
    return res.send(posts)
})

app.listen(9000, () => console.log("Express running on PORT : 9000"))


// (C) POST - create new post - http://localhost:9000/posts + REQUEST BODY (title, body)
// (R) GET - fetching all posts - http://localhost:9000/posts
// (R) GET - fetch single post based upon the ID - http://localhost:9000/posts/p003
// (U) PATCH - update the item based upon the ID given - http://localhost:9000/posts/p003 + REQUEST BODY (Title | Body)
// (D) DELETE - delete one item based upon the ID - http://localhost:9000/posts/p001


