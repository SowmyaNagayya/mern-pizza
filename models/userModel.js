const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type: String, require},
    email : {type: String, require},
    password : {type: String, require},
    isAdmin : {type: Boolean, require, default: false}
}, {
    // timestamps is use to check when pizza is added to database
    timestamps: true,
})
// collection name is "pizza" and schema name is "pizzaSchema"
const userModel = mongoose.model('users', userSchema);

module.exports = userModel;