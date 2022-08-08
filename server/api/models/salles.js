const mongoose = require('mongoose');

const schemaSalles = mongoose.Schema(
    {
        id:{
            type:String,
            require:true
        },
        designation:{
            type:String,
            require:true
        },
        prix:{
            type:Number,
            require:true
        },
    }
);

module.exports = mongoose.model('Salles',schemaSalles);