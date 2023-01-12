const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    
    nom: {
        required: true,
        type: String
    },
    
    prenom: {
        required: true,
        type: String
    },

    age: {
        required: true,
        type: String
    },

    genre: {
        required: true,
        type: String
    },

})

module.exports = mongoose.model('utilisateur', dataSchema);