const express = require('express');
const helmet = require('helmet');
//const dotenv = require('dotenv').config();

const Produit = require('./models/produit');

const mongoose = require('mongoose');


const path = require('path');
const produitRoutes = require('./routes/produit');
/*
const userRoutes = require('./routes/user');
*/

const app = express();

app.use(helmet());

/*mongoose.connect('mongodb+srv://' + process.env.DB_USER +':' + process.env.DB_PASS + '@' + process.env.DB_URI + '/' + process.env.DB_NAME + '?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));*/

mongoose.connect('mongodb+srv://ducampdorgas:PeriLsf37@orinoco.d581w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/produits', produitRoutes);

/*app.use('/api/auth', userRoutes);
*/

module.exports = app;