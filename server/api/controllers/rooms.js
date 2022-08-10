const mongoose = require('mongoose');
const Rooms = require('../models/rooms');

exports.createRooms = (req,res,next) => {
    Rooms.find({ numroom: req.body.numroom})
    .then(
        (result) => {
            if (result.length > 0) {
                res.status(409).json({
                    message: "Cette chambre existe déjà"
                });
            } else{
                const newRooms = Rooms(
                    {
                        _id: new mongoose.Types.ObjectId,
                        numroom: req.body.numroom,
                        telephone: req.body.telephone,                        
                        classe: req.body.classe,                        
                        id : req.body.id
                    }
                );
                newRooms.save()
                    .then(
                    (rooms) => {
                        const response = {
                            id: rooms._id,
                            numroom: rooms.numroom,
                            telephone: rooms.telephone,                                                  
                            classe: rooms.classe,                                                  
                        };
                        return res.status(200).json({
                            message: "La chambre a été ajoutée avec succès",
                            rooms: response,
                        })
                    }
                )
                .catch(
                    err => {
                        res.status(500).json({
                            error: err.message
                        })
                    }
                )
            }
        }
    )
    .catch(
        err => {
            res.status(500).json({
                error: err.message
            })
        }
    )
};

exports.findRooms = (req,res) => {
    
    Rooms.find((err, cl) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
                res.status(200).json({
                    rooms: cl
                }); 
        }
    });
}

exports.getSingleRooms = (req, res) => {
    Rooms.findById(req.params.roomId, (err, result) => {
        if (err) {
            res.status(500).json({
                error: err.message
            })
        } else {
            if (!result) {
                res.status(409).json({
                    message: "cette chambre n'existe pas"
                }
                );

            } else {
                res.status(200).json(
                    result
                )
            }
        }
    })
}

exports.updateRooms = (req, res) => {
    const id = req.params.roomId;
   
    Rooms.findById(req.params.roomId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cette chambre n'existe pas"
                })
            }else{              
                
                const roomsToUpdate = new Rooms({
                    _id: id,
                    numroom: req.body.numroom,
                    telephone: req.body.telephone,                  
                    classe: req.body.classe,                  
                });

                Rooms.updateOne({ _id: id }, roomsToUpdate).then(
                    (result) => {
                        Rooms.findById(id,(err,cl)=>{
                                if(err){
                                    res.status(500).json(
                                        {
                                            message:err.message,
                                        }
                                    );
                                } else{
                                    res.status(201).json({
                                        message: "La chambre a été modifiée avec succès",
                                        rooms: cl,
                                    })   
                                }
                            });                       
                    }
                ).catch(
                    err => {
                        res.status(500).json({
                            error: err.message
                        })
                    }
                )
            } 
        }
    ).catch(
        err => {
            res.status(500).json({
                error: err.message
            })
        }
    );    
}

exports.deleteRooms = (req,res)=>{
    const id = req.params.roomId;
    Rooms.findById(req.params.roomId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cette chambre n'existe pas"
                })
            }else{
                Rooms.remove({_id: id}).then(
                    (result)=>{  
                        res.status(200).json({
                            message: "La chambre a été supprimée avec succès",    
                        }
                        );
                    }
                ).catch(
                    err=>{
                        res.status(500).json({
                            error:err.message
                        })
                    }
                );              
            }
        }
    ).catch(
        err=>{
            res.status(500).json({
                error:err.message
            })
        }
    )
   
}