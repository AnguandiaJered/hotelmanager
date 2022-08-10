const mongoose = require('mongoose');
const Reserverooms = require('../models/reservationrooms');

exports.createReserverooms = (req,res,next) => {
    Reserverooms.find({ chambre: req.body.chambre})
    .then(
        (result) => {
            if (result.length > 0) {
                res.status(409).json({
                    message: "Cette chambre est déjà reservée"
                });
            } else{
                const newReserverooms = Reserverooms(
                    {
                        _id: new mongoose.Types.ObjectId,
                        client: req.body.client,
                        chambre: req.body.chambre,                        
                        dateEntree: req.body.dateEntree,                        
                        dateSortie: req.body.dateSortie,                        
                        libelle: req.body.libelle,                        
                        nombrejour: req.body.nombrejour,                        
                        prix: req.body.prix,                        
                        id : req.body.id
                    }
                );
                newReserverooms.save()
                    .then(
                    (reservation) => {
                        const response = {
                            id: reservation._id,
                            client: reservation.client,
                            chambre: reservation.chambre,                        
                            dateEntree: reservation.dateEntree,                        
                            dateSortie: reservation.dateSortie,                        
                            libelle: reservation.libelle,                        
                            nombrejour: reservation.nombrejour,                        
                            prix: reservation.prix,                                                  
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

exports.findReserverooms = (req,res) => {
    
    Reserverooms.find((err, cl) => {
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

exports.getSingleReserverooms = (req, res) => {
    Reserverooms.findById(req.params.reserveId, (err, result) => {
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

exports.updateReserverooms = (req, res) => {
    const id = req.params.reserveId;
   
    Reserverooms.findById(req.params.reserveId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cette reservation n'existe pas"
                })
            }else{              
                
                const reservationToUpdate = new Reserverooms({
                    _id: id,
                    client: req.body.client,
                    chambre: req.body.chambre,                        
                    dateEntree: req.body.dateEntree,                        
                    dateSortie: req.body.dateSortie,                        
                    libelle: req.body.libelle,                        
                    nombrejour: req.body.nombrejour,                        
                    prix: req.body.prix,                   
                });

                Reserverooms.updateOne({ _id: id }, reservationToUpdate).then(
                    (result) => {
                        Reserverooms.findById(id,(err,cl)=>{
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

exports.deleteReserverooms = (req,res)=>{
    const id = req.params.reserveId;
    Reserverooms.findById(req.params.reserveId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cette reservation n'existe pas"
                })
            }else{
                Reserverooms.remove({_id: id}).then(
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