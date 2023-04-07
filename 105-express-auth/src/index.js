const express = require("express");
const { sign } = require("jsonwebtoken");

const app = express()

app.use(express.json());

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "test@test" && password === "test123") {
        const token = sign({ email, password }, "MY_SECKET_KEY")
        return res.send({ message: "Authenticated User", token })
    }
    return res.send("Bad Credentials")
})

const ensureToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    console.log(authHeader);
    if (!authHeader) {
        return res.send({ error: "Auth Requried" })
    }
    const token = authHeader.split(" ")[1]          // "Bearer tokenValue"
    req.token = token;
    console.log("TOKEN : ", token)
    next();
}

app.post("/api/protected", ensureToken, (req, res) => {
    res.send("Protected API")
})

app.listen(9001, () => console.log("Server started at 9001"))