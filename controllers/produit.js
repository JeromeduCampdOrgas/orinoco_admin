//Récupération du schéma 
const Sauce = require('../models/produit');
const fs = require('fs');

//Permet l'implémentation d'une nouvelle sauce
exports.createProduit = (req, res, next) => {
    const produitObject = JSON.parse(req.body.produit);
    delete produitObject._id;

    const produit = new Produit({
        ...produitObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    //enregistrement en base
    produit.save()
        .then(() => { res.status(201).json({ message: 'Post saved successfully!' }); })
        .catch(error => { res.status(400).json({ error: error }); });
};