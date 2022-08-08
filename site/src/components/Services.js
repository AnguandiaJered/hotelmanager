import React,{ Fragment } from "react";
import home_slide1 from '../images/home_slide1.jpg';
import swim from '../images/swim.jpg';
import gym from '../images/gym.jpg';
import laundry from '../images/laundry.png';
import taxi from '../images/taxi.png';
import wifi from '../images/wifi.png';
import garden from '../images/garden.jpg';


 export const Services = () =>{
    return (
        <Fragment>
            <div className="mt-5 job">
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 ml-5 mt-5">
                                    <h1 className="text-left">Les Services de Gold Star International Hotel</h1><br/>
                                    <p className="text-left">Un magnifique et admirable hotel construit par Groupe 
                                    d'architectes Internationaux,bien équipé d'un Standard International,
                                    situé au Centre de la ville de Bunia, en Province de l'ITURI,Tourism in Dem. Rep. of Congo.
                                    </p>  
                                    <p className="text-left">Implanté au coeur de la ville de Bunia. Tout pret de marché central
                                    à un positionnement strategique et touristique,avec un moyen de transport facile et un centre 
                                    d'activité culturelles , à 4.5 km à l'aeroport de MURONGO/Bunia.
                                    </p> 
                            </div>                
                            <div className="col-md-3 mt-5">
                                    <img src={home_slide1} alt="Gold stars hotel" className="heb" width={700} height={400} />
                                </div>
                        </div>                        
                </div> 
            </div>
            <Servo/>
        </Fragment>
    )
}
export const Servo = () =>{
    return (
        <div className="servo"><br/><br/>
            <div className="container-fluid">
                <h1 className="text-center">Nos services</h1><br/>
                <p className="col-md-7 text-center offset-2">Gold Star Hôtel Bunia fournit tous les services dont vous avez besoin.
                </p>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Sero image={swim} 
                            title="Piscine" 
                            detail="Gold Stars Hotel Bunia dispose d’une piscine (swimming pool) doté 
                            d’un vestiaire mis à la disposition de son aimable clientèle."
                             /><br/>
                            <Sero image={gym} 
                            title="Gymnase Et Sauna" 
                            detail="Gold Stars Hotel Bunia offre un gymnase équipé, avec entraineur. 
                            Il dispose aussi d’un sauna."
                            />
                        </div>
                        <div className="col-md-4">
                            <Sero image={wifi} 
                                title="Wifi Gratuit" 
                                detail="Gold Stars Hotel Bunia offre la connexion Internet Wifi haut débit gratuite sur son 
                                site 24 heures sur 24."
                                /><br/>
                            <Sero image={laundry} 
                                title="Blanchisserie, Salon de coiffure," 
                                detail="Une blanchisserie et un salon de coiffure font partie de tant d’autres 
                                commodités offertes par Gold Stars Hotel Bunia pour rendre encore plus agréable 
                                votre séjour."
                               />
                        </div>
                        <div className="col-md-4">
                            <Sero image={taxi} 
                            title="Taxi Aero" 
                            detail="Un service de taxi est disponible de et vers l’aéroport national de 
                            Bunia/Murongo notamment, par minibus Gold Stars Hotel Bunia."
                           /><br/>
                            <Sero image={garden} 
                            title="Jardin" 
                            detail="Son jardin est propice pour des fêtes (ex. mariage) et autres 
                            cérémonies en plein air. Gold Stars Hotel Bunia dispose en outre d’un parking, 
                            gratuit et sécurisé, avec une capacité d’accueil d’environs 25 
                            véhicules dans l’enclos et plus de 100 voitures hors enclos."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Sero = ({image,title,detail}) =>{
    return(
        <div className="blsere text-left">
            <img src={image} alt="blog" width={100}  className="mt-3 imag"/>
            <h3 className="mt-4 ml-3 text-center">{title}</h3>
            <p className="mt-3 ml-3">{detail}</p>           
        </div>
    )
}

