const mongoose = require('mongoose');

const schemaRooms = mongoose.Schema(
    {
        id:{
            type:String,
            require:true
        },
        numroom:{
            type:String,
            require:true
        },
        telephone:{
            type:String,
            require:true
        },
        classe:{
            type:String,
            require:true
        },
    }
);

module.exports = mongoose.model('Rooms', schemaRooms);