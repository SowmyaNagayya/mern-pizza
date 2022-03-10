const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name : {type: String, require},
    variants : [],
    prices : [],
    category : {type: String, require},
    image : {type: String, require},
    description : {type: String, require},
}, {
    // timestamps is use to check when pizza is added to database
    timestamps: true,
})
// collection name is "pizza" and schema name is "pizzaSchema"
const pizzaModel = mongoose.model('pizza', pizzaSchema);

module.exports = pizzaModel;