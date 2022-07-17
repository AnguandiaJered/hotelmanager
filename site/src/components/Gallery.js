import React from "react";
import heberger from '../images/heberger.jpg';
import heberger1 from '../images/heberger1.jpg';
import heberger2 from '../images/heberger2.png';
import heberger3 from '../images/heberger3.jpg';
import heberger7 from '../images/heberger7.jpg';
import heberger4 from '../images/heberger4.JPG';
import heberger5 from '../images/heberger5.jpg';
import heberger6 from '../images/heberger6.jpg';
import conference from '../images/conference.jpg'
import swim from '../images/swim.jpg';
import gym from '../images/gym.jpg';
import garden from '../images/garden.jpg';
import spring from '../images/spring.png';
import home_slide1 from '../images/home_slide1.jpg';
import home_slide2 from '../images/home_slide2.jpg';
import dinner from '../images/dinner.jpg';
import legume from '../images/legume.png';
import salade from '../images/salade.png';

export const Gallery = ()=>{
    return(
        <>
            <div className="gallery mt-5">
                <div className="container-fluid mt-5"><br/>
                    <h1 className="text-center mt-5">Gallery de Gold Stars International Hotel</h1>
                    <p className="text-center mt-3 col-md-10 offset-1">Hotel avec des chambres suivant différentes catégories-climatisation, refrigérateur, Canal+, ...- Un restaurant à cuisines confondues-Africaines, Europée</p>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <Sero image={heberger}  />                       
                                <Sero image={heberger1}  />                       
                                <Sero image={heberger2}  />
                            </div>
                            <div className="col-md-2">
                                <Sero image={heberger3}  />                       
                                <Sero image={heberger4}  />                       
                                <Sero image={heberger5}  />
                            </div>
                            <div className="col-md-2">
                                <Sero image={heberger6}  />                       
                                <Sero image={heberger7}  />                       
                                <Sero image={gym}  />
                            </div>
                            <div className="col-md-2">
                                <Sero image={swim}  />                       
                                <Sero image={garden}  />                       
                                <Sero image={spring}  />
                            </div>
                            <div className="col-md-2">                            
                                <Sero image={home_slide1}  />                       
                                <Sero image={home_slide2}  />                       
                                <Sero image={conference}  />
                            </div>
                            <div className="col-md-2">                            
                                <Sero image={salade}  />                       
                                <Sero image={dinner}  />                       
                                <Sero image={legume}  />
                            </div>                                              
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Sero = ({image}) =>{
    return(
        <div className="blor mt-3">
            <img src={image} alt="blog" width={230} height={200} className="blor"/>                    
        </div>
    )
}