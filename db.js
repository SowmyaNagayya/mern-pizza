const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://admin:root@cluster0.w0yex.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected', () => {
    console.log(`Mongo DB Connection Successful`);
})

db.on('error', () => {
    console.log(`Mongo DB Connection failed`)
})

module.exports = mongoose