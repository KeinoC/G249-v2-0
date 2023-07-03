const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const eventSchema = new Schema ({
    type: String,
    date: String,
    clientId: String,
})


module.exports = mongoose.model('Event', eventSchema)
