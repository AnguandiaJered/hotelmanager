const mongoose = require('mongoose');

const schemaReserverooms = mongoose.Schema(
    {
        id:{
            type:String,
            require:true
        },
        client:{
            type:String,
            require:true
        },
        chambre:{
            type:String,
            require:true
        },
        dateEntree:{
            type:Date,
            require:true
        },
        dateSortie:{
            type:Date,
            require:true
        },
        libelle:{
            type:String,
            require:true
        },
        nombrejour:{
            type:Number,
            require:true
        },
        prix:{
            type:Number,
            require:true
        },
        dateOperation:{
            type:Date,
            default:Date.now
        },
    }
);

module.exports = mongoose.model('Reserverooms',schemaReserverooms);