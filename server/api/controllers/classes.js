const mongoose = require('mongoose');
const Classes = require('../models/classes');

exports.createClasses = (req,res,next) => {
    Classes.find({ designation: req.body.designation})
    .then(
        (result) => {
            if (result.length > 0) {
                res.status(409).json({
                    message: "Cette classe existe déjà"
                });
            } else{
                const newClasse = Classes(
                    {
                        _id: new mongoose.Types.ObjectId,
                        designation: req.body.designation,
                        montant: req.body.montant,                        
                        id : req.body.id
                    }
                );
                newClasse.save()
                    .then(
                    (classe) => {
                        const response = {
                            id: classe._id,
                            designation: classe.designation,
                            montant: classe.montant,                                                  
                        };
                        return res.status(200).json({
                            message: "La classe a été ajoutée avec succès",
                            classe: response,
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

exports.findClasse = (req,res) => {
    
    Classes.find((err, cl) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
                res.status(200).json({
                    classe: cl
                }); 
        }
    });
}

exports.getSingleClasse = (req, res) => {
    Classes.findById(req.params.classeId, (err, result) => {
        if (err) {
            res.status(500).json({
                error: err.message
            })
        } else {
            if (!result) {
                res.status(409).json({
                    message: "cette classe n'existe pas"
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

exports.updateClasse = (req, res) => {
    const id = req.params.classeId;
   
    Classes.findById(req.params.classeId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cette classe n'existe pas"
                })
            }else{              
                
                const classeToUpdate = new Classes({
                    _id: id,
                    designation: req.body.designation,
                    montant: req.body.montant,                  
                });

                Classes.updateOne({ _id: id }, classeToUpdate).then(
                    (result) => {
                        Classes.findById(id,(err,cl)=>{
                                if(err){
                                    res.status(500).json(
                                        {
                                            message:err.message,
                                        }
                                    );
                                } else{
                                    res.status(201).json({
                                        message: "La classe a été modifiée avec succès",
                                        classe: cl,
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

exports.deleteClasse = (req,res)=>{
    const id = req.params.classeId;
    Classes.findById(req.params.classeId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cette classe n'existe pas"
                })
            }else{
                Classes.remove({_id: id}).then(
                    (result)=>{  
                        res.status(200).json({
                            message: "La classe a été supprimée avec succès",    
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