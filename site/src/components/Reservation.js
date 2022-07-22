import React from "react";
import {Chambre} from './Chambre'
import {Salle} from './Salle'

export const Reservation = () =>{
    return(
       <>
            <div className="reserve mt-5"><br/>
                <div className="container-fluid mt-5">
                    <h1 className="text-center">Reservation de Chambres d'hotel et Salles de Ceremonie</h1>
                    <p className="text-center mt-3 col-md-10 offset-1"> Vous offre plus de 42 chambres toutes catégories confortables
                 et luxueuses, avec un service plus flexible et distingué. Heure:24 heures. </p> 
                 <p className="text-center mt-3 col-md-10 offset-1">NB: Nous vous  donnons la possibilité de reserver la 
                 chambre et la salle en ligne mais le paiement se passera sur place. 
                 En effet cette reservation sera expirée après 48 heures si le paiement n'est pas effectué.</p>
                </div>
            <Chambre/>
            <Salle/>
            </div>
       </>
    )
}

