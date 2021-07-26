const mongoose = require('mongoose');

const produitSchema = mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    colors: { type: String, required: false },
    imageUrl: { type: String, required: true },
    Stock: { type: Number, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Produit', produitSchema);