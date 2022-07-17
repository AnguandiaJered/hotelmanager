import React,{ Fragment } from 'react';

const Footer = () =>{
    return(
        <Fragment>
            <div className='footer'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3 ml-5 mt-5'>
                            <h1 className='text-white'>Gold Star International Hotel</h1>
                            <div className='text-white mt-3'>SubNetCongo vise à contribuer à la résolution des problèmes de la communauté 
                                grâce à la TECHNOLOGIE et promouvoir l'intégrité de la jeunesse en appliquant la 
                                technologie afin de permettre  l'émergence  de la société.
                            </div>
                        </div>
                        <div className='col-md-2 ml-5 text-left mt-5'>
                            <h1 className='text-white'>Ressources</h1>
                            <ul className="list-unstyled mt-3">
                                <li><a className='text-white' href='#'>A propos de nous</a></li> 
                                <li><a className='text-white' href='#'>Nos Services</a></li> 
                                <li><a className='text-white' href='#'>Nos projets</a></li> 
                            </ul>
                        </div>
                        <div className='col-md-2 ml-5 mt-5'>
                            <h1 className='text-white'>Support</h1>
                            <ul className="list-unstyled mt-3">
                                <li><a className='text-white' href='#'>Contactez-nous</a></li>
                                <li><a className='text-white' href='#'>Nos partenaires</a></li>
                                <li><a  className='text-white' href='#'>Technologies</a></li>
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
                            <a href="#" class="col-md-3 text-white" target="_blank">
                                <span id="spa" class="fa fa-github"></span>
                            </a>
                            <a href="#" class="col-md-4 text-white" target="_blank">
                                <span id="spa" class="fa fa-twitter"></span>
                            </a>
                            <a href="#" class="col-md-4 text-white" target="_blank">
                                <span id="spa" class="fa fa-linkedin"></span>
                            </a> 
                            <a href="#" class="col-md-4 text-white" target="_blank">
                                <span id="spa" class="fa fa-facebook"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ) 
}

export default Footer;