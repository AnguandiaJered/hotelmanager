import React from "react";
import room from '../images/room.jpg'
import barrestaurant from '../images/barrestaurant.jpg'
import conference from '../images/conference.jpg'

export const Room = () =>{
    return (
        <div className="room">
            <div className="container-fluid">
                <h1 className="text-center">Nos chambres,Restaurants et Nos Bars</h1>
                <p className="text-center mt-5 col-md-10 offset-1">BIENVENUE ! Bunia, chef-lieu de la Province de 
                l’Ituri, au Nord Est de la République Démocratique du Congo, dispose d’un nouvel 
                établissement hôtelier de standard international : Gold Stars. 
                Gold Stars Hôtel Bunia réunit tous les atouts qui en font un cadre unique et 
                idéal de séjour, de travail, des affaires, de détente ou vacances en ville de Bunia : 
                accès facile, confort unique, services impeccables, salles de réunion, gymnase, piscine, 
                personnel professionnel…</p>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Blog image={room} 
                            title="Nos Chambres" 
                            detail="Gold Stars Hotel Bunia dispose de 42 chambres spacieuses de 
                            diverses catégories : suite présidentielle, VIP rooms, chambres doubles, 
                            chambres simples. Toutes nos chambres et suites ont une vue imprenable sur 
                            la ville de Bunia et sont équipées de toutes les commodités individuelles. 
                            Les mobiliers sont luxueux et garnis d’accessoires modernes. Chaque chambre 
                            dispose d’une connexion internet, de téléphone fixe, du conditionnement d’air, 
                            d’écran plasma connecté aux chaines de télévision nationales et internationales." />
                        </div>
                        <div className="col-md-4">
                            <Blog image={barrestaurant} 
                            title="Notre Restaurant et nos Bars" 
                            detail="Notre restaurant, homologué trois fourchettes, d’une capacité de 50 chaises,
                             offre des spécialités culinaires tant africaines qu’européennes. 
                             Il fournit divers services tel le banquet et le service traiteur. 
                             C’est le cadre idéal pour vos petits déjeuners, déjeuners et diners d’affaires ou 
                             privés. Café Safari au rez-de-chaussée, Café VIP au premier étage, 
                             Gold Stars Terrasse au deuxième étage, VIP Terrasse sur le toit de l’hôtel, 
                             avec la meilleure vue sur la ville de Bunia, Gold Stars offre une diversité de 
                             bars et terrasses. Nous offrons également traiteur et servir cuisines appétissantes 
                             pour toutes les occasions. Nous offrons une grande variété de prêts à sélectionner 
                             les menus. Nous préparons également des recettes sur demande. Nous servons 
                             habituellement à des événements d'ONG, des fêtes d'anniversaire, réunions 
                             d'entreprise, mariages et événements de l'église. Nous fournissons tout, 
                             de tentes, chaises, couverts et le personnel de service pour prendre soin de vos 
                             invités comme vous détendre et profiter de votre fonction." />
                        </div>
                        <div className="col-md-4">
                            <Blog image={conference} 
                            title="Notre Salle de Conference" 
                            detail="Gold Stars Hotel Bunia c’est aussi une salle de conférence de grande 
                            capacité (350 places), climatisée, avec équipements modernes de téléconférence. 
                            La salle de conférence peut être adaptée en fonction de besoins spécifiques…" />
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Blog = ({image,title,detail}) =>{
    return(
        <div className="blog text-center">
            <img src={image} alt="blog" width={460} height={300} className="ima"/>
            <h3 className="mt-4">{title}</h3>
            <p className="mt-3 text-justify col-md-12">{detail}</p>
        </div>
    )
}
