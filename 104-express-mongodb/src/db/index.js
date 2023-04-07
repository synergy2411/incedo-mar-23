const { connect } = require("mongoose")

connect("mongodb://localhost:27017/incedo-db")
    .then(() => console.log("Mongo Connected!"))
    .catch(console.log)