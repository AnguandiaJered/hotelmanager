const mongoose = require('mongoose');
const Paierooms = require('../models/paierooms');

exports.createPaierooms = (req,res,next) => {
    Paierooms.find({ _id: req.body._id})
    .then(
        (result) => {
            if (result.length > 0) {
                res.status(409).json({
                    message: "Ce paiement existe déjà"
                });
            } else{
                const newPaierooms = Paierooms(
                    {
                        _id: new mongoose.Types.ObjectId,
                        client: req.body.client,
                        reservation: req.body.reservation,                        
                        montant: req.body.montant,                        
                        libelle: req.body.libelle,                        
                        author: req.body.author,                        
                        id : req.body.id
                    }
                );
                newPaierooms.save()
                    .then(
                    (paiement) => {
                        const response = {
                            id: paiement._id,
                            client: paiement.client,
                            reservation: paiement.reservation,                        
                            montant: paiement.montant,                        
                            libelle: paiement.libelle,                        
                            author: paiement.author,                                                   
                        };
                        return res.status(200).json({
                            message: "Le paiement a été ajoutée avec succès",
                            paiement: response,
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

exports.findPaierooms = (req,res) => {
    
    Paierooms.find((err, cl) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
                res.status(200).json({
                    paiement: cl
                }); 
        }
    });
}

exports.getSinglePaierooms = (req, res) => {
    Paierooms.findById(req.params.paieId, (err, result) => {
        if (err) {
            res.status(500).json({
                error: err.message
            })
        } else {
            if (!result) {
                res.status(409).json({
                    message: "ce paiement n'existe pas"
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

exports.updatePaierooms = (req, res) => {
    const id = req.params.paieId;
   
    Paierooms.findById(req.params.paieId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Ce paiement n'existe pas"
                })
            }else{              
                
                const paieToUpdate = new Paierooms({
                    _id: id,
                    client: req.body.client,
                    reservation: req.body.reservation,                        
                    montant: req.body.montant,                        
                    libelle: req.body.libelle,                        
                    author: req.body.author,                   
                });

                Paierooms.updateOne({ _id: id }, paieToUpdate).then(
                    (result) => {
                        Paierooms.findById(id,(err,cl)=>{
                                if(err){
                                    res.status(500).json(
                                        {
                                            message:err.message,
                                        }
                                    );
                                } else{
                                    res.status(201).json({
                                        message: "Le paiement a été modifiée avec succès",
                                        paiement: cl,
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

exports.deletePaierooms = (req,res)=>{
    const id = req.params.paieId;
    Paierooms.findById(req.params.paieId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Ce paiement n'existe pas"
                })
            }else{
                Paierooms.remove({_id: id}).then(
                    (result)=>{  
                        res.status(200).json({
                            message: "Le paiement a été supprimée avec succès",    
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