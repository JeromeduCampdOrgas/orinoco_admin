const mongoose = require('mongoose');

const produitSchema = mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    colors: { type: String, required: false },
    imageUrl: { type: String, required: false },
    Stock: { type: Number, required: false },
    price: { type: Number, required: false },
});

module.exports = mongoose.model('Produit', produitSchema);