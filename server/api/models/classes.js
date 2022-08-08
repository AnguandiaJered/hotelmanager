const mongoose = require('mongoose');

const schemaClasses = mongoose.Schema(
    {
        id:{
            type:String,
            require:true
        },
        designation:{
            type:String,
            require:true
        },
        montant:{
            type:Number,
            require:true
        },
    }
);

module.exports = mongoose.model('Classes',schemaClasses);