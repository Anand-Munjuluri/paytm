const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://munjulurianand:AnaMun*01@cluster0.pxba1rf.mongodb.net/")
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})
const User = mongoose.model("User", userSchema); //model allows to execute operations on schema

module.exports = {
    User
}
