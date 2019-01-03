const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String},
    grapes: { type: String},
    producer: { type: String},
    type: { type: String},
    price: { type: Number},
    description:  { type: String},
    alcohol: { type: Number},
    storingTemperature: { type: String},
    productImage: {type: String}
});

module.exports = mongoose.model('Product', productSchema);