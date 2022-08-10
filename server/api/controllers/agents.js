const mongoose = require('mongoose');
const Agent = require('../models/agents');

exports.createAgent = (req,res,next) => {
    Agent.find({ noms: req.body.noms})
    .then(
        (result) => {
            if (result.length > 0) {
                res.status(409).json({
                    message: "Cet agent existe déjà"
                });
            } else{
                const newAgent = Agent(
                    {
                        _id: new mongoose.Types.ObjectId,
                        noms: req.body.noms,
                        sexe: req.body.sexe,
                        datenaissance: req.body.datenaissance,
                        adresse: req.body.adresse,
                        etatcivil: req.body.etatcivil,
                        telephone: req.body.telephone,
                        mail: req.body.mail,
                        fonction: req.body.fonction,
                        id : req.body.id
                    }
                );
                req.files.forEach(f => {
                    const path = f.path.substring(8);
                    const imagePath = path;
                    newClient.images.push(imagePath);
                });
                newAgent.save()
                    .then(
                    (agent) => {
                        const response = {
                            id: agent._id,
                            noms: agent.noms,
                            sexe: req.body.sexe,
                            datenaissance: agent.datenaissance,
                            adresse: agent.adresse,
                            etatcivil: agent.etatcivil,
                            telephone: agent.telephone,
                            mail: agent.mail,
                            fonction: agent.fonction,                          
                        };
                        return res.status(200).json({
                            message: "Le personnel a été ajoutée avec succès",
                            agent: response,
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

exports.findAgent = (req,res) => {
    
    Agent.find((err, pers) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
                res.status(200).json({
                    agent: pers
                }); 
        }
    });
}

exports.getSingleAgent = (req, res) => {
    Agent.findById(req.params.agentId, (err, result) => {
        if (err) {
            res.status(500).json({
                error: err.message
            })
        } else {
            if (!result) {
                res.status(409).json({
                    message: "cet agent n'existe pas"
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

exports.updateAgent = (req, res) => {
    const id = req.params.agentId;
   
    Agent.findById(req.params.agentId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Ce personnel n'existe pas"
                })
            }else{ 
                const agentImages = result.images;
                let getImagesPaths = [];
                if(req.files.length == 0){
                    getImagesPaths = agentImages;
                }else{
                    req.files.forEach(f => {
                        const path = f.path.substring(8);
                        getImagesPaths.push(path);
                    });
                }                                      
                
                const agentToUpdate = new Agent({
                    _id: id,
                    noms: req.body.noms,
                    sexe: req.body.sexe,
                    datenaissance: req.body.datenaissance,
                    adresse: req.body.adresse,
                    etatcivil: req.body.etatcivil,
                    telephone: req.body.telephone,
                    mail: req.body.mail,
                    fonction: req.body.fonction,
                    images: getImagesPaths,                   
                });

                Agent.updateOne({ _id: id }, agentToUpdate).then(
                    (result) => {
                        Agent.findById(id,(err,ag)=>{
                                if(err){
                                    res.status(500).json(
                                        {
                                            message:err.message,
                                        }
                                    );
                                } else{
                                    res.status(201).json({
                                        message: "Le personnel a été modifiée avec succès",
                                        agent: ag,
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

exports.deleteAgent = (req,res)=>{
    const id = req.params.agentId;
    Agent.findById(req.params.agentId).then(
        (result)=>{
            if(!result){
                res.status(409).json({
                    message: "Cet agent n'existe pas"
                })
            }else{
                Agent.remove({_id: id}).then(
                    (result)=>{  
                        res.status(200).json({
                            message: "L'agent a été supprimée avec succès",    
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