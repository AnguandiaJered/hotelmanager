const mongoose = require('mongoose');

const schemaPaiesalles = mongoose.Schema(
    {
        id:{
            type:String,
            require:true
        },
        client:{
            type:String,
            require:true
        },
        reservation:{
            type:String,
            require:true
        },
        montant:{
            type:Number,
            require:true
        },
        libelle:{
            type:String,
            require:true
        },      
        author:{
            type:String,
            require:true
        },
        dateOperation:{
            type:Date,
            default:Date.now
        },
    }
);

module.exports = mongoose.model('Paiesalles', schemaPaiesalles);