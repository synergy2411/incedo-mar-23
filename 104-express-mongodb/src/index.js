const express = require("express");
require("./db")
const cors = require("cors")

const postRouter = require("./routes/post.routes");

const app = express();

app.use(express.json())
app.use(cors())
app.use("/api/posts", postRouter)

app.listen(9090, () => console.log("Server started at PORT : 9090"))
