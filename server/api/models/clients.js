const mongoose = require('mongoose');

const schemaClients = mongoose.Schema(
    {
        id:{
            type:String,
            require:true
        },
        noms:{
            type:String,
            require:true
        },
        sexe:{
            type:String,
            require:true
        },
        adresse:{
            type:String,
            require:true
        },
        telephone:{
            type:String,
            require:true
        },
        mail:{
            type:String,
            require:true
        },
        datenaissance:{
            type:Date,
            require:true
        },
        profession:{
            type:String,
            require:true
        },
        images:[
            String
        ],

    }
);

module.exports = mongoose.model('Clients',schemaClients);