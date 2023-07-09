const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema ({
    username: String,
    eventId: String,
})


module.exports = mongoose.model('User', userSchema)