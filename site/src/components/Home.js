import React from 'react';
import home_slide1 from '../images/home_slide1.jpg';
import home_slide2 from '../images/home_slide2.jpg';
import home_slide3 from '../images/home_slide3.jpg';
import { Contact } from './Contact';
import { Room } from './Room';
import Hebergement from './Hebergement';



const Home = () =>{
    return(
        <div className='mt-5'>
            <div className='#'>               
                <div class="owl-carousel">
                        <img src={home_slide1} alt="Gold Stars hotel"/>
                        <img src={home_slide2} alt="Gold Stars hotel"/>
                        <img src={home_slide3} alt="Gold Stars hotel"/>  
                </div>    
            </div>
            <Hebergement/>
            <Room/>
            <Contact/>
        </div>
    ) 
}

export default Home;