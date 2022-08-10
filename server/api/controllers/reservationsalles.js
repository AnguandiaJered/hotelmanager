const mongoose = require('mongoose');
const Reservesalles = require('../models/reservationsalles');

exports.createReservesalles = (req,res,next) => {
    Reservesalles.find({ dateceremonie: req.body.dateceremonie})
    .then(
        (result) => {
            if (result.length > 0) {
                res.status(409).json({
                    message: "Cette salle est déjà reservée"
                });
            } else{
                const newReservesalles = Reservesalles(
                    {
                        _id: new mongoose.Types.ObjectId,
                        client: req.body.client,
                        salle: req.body.salle,                        
                        prix: req.body.prix,                        
                        libelle: req.body.libelle,                        
                        dateceremonie: req.body.dateceremonie,                                  
                        id : req.body.id
                    }
                );
                newReservesalles.save()
                    .then(
                    (reservation) => {
                        const response = {
                            id: reservation._id,
                            client: reservation.client,
                            salle: reservation.salle,                        
                            prix: reservation.prix,                                  
                            libelle: reservation.libelle,                        
                            dateceremonie: reservation.dateceremonie,                                                                          
                        };
                        return res.status(200).json({
                            message: "La reservation a été ajoutée avec succès",
                            reservation: response,
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

exports.findReservesalles = (req,res) => {
    
    Reservesalles.find((err, cl) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
                res.status(200).json({
                    reservation: cl
                }); 
        }
    });
}

exports.getSingleReservesalles = (req, res) => {
    Reservesalles.findById(req.params.reserveId, (err, result) => {
        if (err) {
            res.status(500).json({
                error: err.message
            })
        } else {
            if (!result) {
                res.status(409).json({
                    message: "cette reservation n'existe pas"
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

exports.updateReservesalles = (req, res) => {
    const id = req.params.reserveId;
   
    Reservesalles.findById(req.params.reserveId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cette salle n'existe pas"
                })
            }else{              
                
                const reservationToUpdate = new Reservesalles({
                    _id: id,
                    client: req.body.client,
                    salle: req.body.salle,                        
                    prix: req.body.prix,                        
                    libelle: req.body.libelle,                        
                    dateceremonie: req.body.dateceremonie,                    
                });

                Reservesalles.updateOne({ _id: id }, reservationToUpdate).then(
                    (result) => {
                        Reservesalles.findById(id,(err,cl)=>{
                                if(err){
                                    res.status(500).json(
                                        {
                                            message:err.message,
                                        }
                                    );
                                } else{
                                    res.status(201).json({
                                        message: "La reservation a été modifiée avec succès",
                                        reservation: cl,
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

exports.deleteReservesalles = (req,res)=>{
    const id = req.params.reserveId;
    Reservesalles.findById(req.params.reserveId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cette reservation n'existe pas"
                })
            }else{
                Reservesalles.remove({_id: id}).then(
                    (result)=>{  
                        res.status(200).json({
                            message: "La reservation a été supprimée avec succès",    
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