import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


const Footer = () =>{
    return(
        <Fragment>
            <div className='footer'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3 ml-5 mt-5'>
                        <img  src={logo} alt="hotel manager" />                          
                            <div className='text-white mt-3'>Un magnifique et admirable hotel construit par 
                            Groupe d'architectes Internationaux,bien équipé d'un Standard International, 
                            situé au Centre de la ville de Bunia, en Province de l'ITURI,Tourism in Dem. Rep. 
                            of Congo.
                            </div>
                        </div>
                        <div className='col-md-2 ml-5 text-left mt-5'>
                            <h1 className='text-white'>Ressources</h1>
                            <ul className="list-unstyled mt-3">
                                <li><Link className='text-white' to='#'>A propos de nous</Link></li> 
                                <li><Link className='text-white' to='/services'>Nos Services</Link></li> 
                                <li><Link className='text-white' to='/gallery'>Galleries</Link></li> 
                            </ul>
                        </div>
                        <div className='col-md-2 ml-5 mt-5'>
                            <h1 className='text-white'>Support</h1>
                            <ul className="list-unstyled mt-3">
                                <li><Link className='text-white' to='#'>Contactez-nous</Link></li>
                                <li><Link className='text-white' to='/reservation'>Reservation</Link></li>
                                <li><Link  className='text-white' to='#'>Restaurant && Bars</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-3 ml-5 mt-5'>
                            <h1 className='text-white'>Adresse</h1>
                            <ul className="list-unstyled mt-3">
                                <li className='text-white'>Gold Stars Hotel Bunia,Ville de Bunia,Quartier Lumumba,
                                        Avenue du marche,Bunia, Democratic Republic of Congo.</li>
                                <li className='text-white'>+243 816 885 485</li>
                                <li className='text-white'>info@goldstarshotelbunia.com</li>
                            </ul>
                        </div>
                    </div>
                        <hr className='MuiDivider-root MuiDivider-fullWidth css-4dny50 container ml-5 mt-4' />
                    <div className='row'>
                        <div className='col-md-6 ml-5 mt-3 text-white'>
                            Copyright &copy;2022 Gold Star International Hotel. All rights reserved
                        </div>
                        <div className='col-md-4 offset-1 mt-4'>                          
                            <Link to="#" class="col-md-4 text-white" target="_blank">
                                <span id="spa" class="fa fa-twitter"></span>
                            </Link>
                            <Link to="#" class="col-md-4 text-white" target="_blank">
                                <span id="spa" class="fa fa-linkedin"></span>
                            </Link> 
                            <Link to='/https://www.facebook.com/GOLD-STARS-HOTEL-BUNIA-1724586261130510/' class="col-md-4 text-white" target="_blank">
                                <span id="spa" class="fa fa-facebook"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ) 
}

export default Footer;