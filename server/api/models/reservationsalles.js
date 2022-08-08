const mongoose = require('mongoose');

const schemaReservesalles = mongoose.Schema(
    {
        id:{
            type:String,
            require:true
        },
        client:{
            type:String,
            require:true
        },
        salle:{
            type:String,
            require:true
        },
        prix:{
            type:Number,
            require:true
        },
        libelle:{
            type:String,
            require:true
        },
        dateceremonie:{
            type:Date,
            require:true
        },
        dateOperation:{
            type:Date,
            default:Date.now
        },
    }
);

module.exports = mongoose.model('Reservesalles', schemaReservesalles);