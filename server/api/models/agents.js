const mongoose = require('mongoose');

const schemaAgents = mongoose.Schema(
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
        datenaissance:{
            type:Date,
            require:true
        },
        adresse:{
            type:String,
            require:true
        },
        etatcivil:{
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
        fonction:{
            type:String,
            require:true
        },
        images:[
            String
        ],

    }
);

module.exports = mongoose.model('Agents', schemaAgents);