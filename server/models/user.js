const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema ({
    uid: String,
    userId: String,
    username: String,
    email: String,
    createdAt: Date,
    Role: String,
})


module.exports = mongoose.model('User', userSchema)