import React from "react";
import { Link } from 'react-router-dom';
import heberger from '../images/heberger.jpg';
import heberger1 from '../images/heberger1.jpg';
import heberger2 from '../images/heberger2.png';
import heberger3 from '../images/heberger3.jpg';
import heberger7 from '../images/heberger7.jpg';
import heberger6 from '../images/heberger6.jpg';

const Hebergement = () =>{
    return (
        <div className="heberger">
            <div className="container-fluid">
                
                <h1 className="text-center">Hebergement</h1>
                <p className="text-center mt-3 col-md-10 offset-1"> Vous offre plus de 42 chambres toutes catégories confortables
                 et luxueuses, avec un service plus flexible et distingué. Heure:24 heures. Enjoys the superior  geographical location and the Convenient transportation , 
                    adjacent to the conference  and Exhibition Center and Cultural activity, 
                    close to the central Market, in the heart of Bunia town, 
                    close to the Main Avenue (Boulevard de Liberation).</p>                
               
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={heberger} width={400} height={200} alt="Gold Stars Hotel" />
                            <img src={heberger1} width={400} height={200} className="mt-3" alt="Gold Stars Hotel" />
                        </div>
                        <div className="col-md-4">
                            <img src={heberger2} width={400} height={200} alt="Gold Stars Hotel" />
                            <img src={heberger3} width={400} height={200} className="mt-3" alt="Gold Stars Hotel" />
                        </div>
                        <div className="col-md-4">
                            <img src={heberger6} width={400} height={200} alt="Gold Stars Hotel" />
                            <img src={heberger7} width={400} height={200} className="mt-3" alt="Gold Stars Hotel" />
                        </div>
                    </div>
                </div>
                <Link className='btn gal ml-3 mt-5' to='/gallery'>Voir Plus...</Link>
            </div>
        </div>
    )
}

export default Hebergement;