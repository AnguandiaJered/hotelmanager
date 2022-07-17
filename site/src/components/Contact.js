import React,{ Fragment } from 'react';
import mail from '../images/mail.PNG';
import adresse from '../images/adresse.PNG';
import tel from '../images/tel.PNG';


export const Contact = () =>{
    return(
        <Fragment>
            <div className='conta'>
                <div className='container-fluid'>                 
                    <div className='ml-5'>
                        <div className='row'>
                            <div className='col-md-6 mt-5'>
                            <h1>Contactez-nous</h1>
                            <p>Vous êtes en quête d'une information ? N'hésitez pas de nous contacter, notre équipe sera heureuse de vous répondre</p>
                                <form>
                                    <div class="row form-group">
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <input type="text"  class="form-control" placeholder='Noms' />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="email" id="email" class="form-control" placeholder='Email' />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Ecriver votre message ici..."></textarea>
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input type="submit" value="ENVOYER" class="btn btn-primary btn-md text-white col-md-4" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='col-md-5 mt-5 ml-5'>
                                <div className="mt-5 ml-5">
                                    <div className="#">
                                        <img src={mail} alt='hotel manager'/>
                                        <span>Email</span>
                                        <p>info@goldstarshotelbunia.com</p>                                        
                                    </div>
                                    <div className="#">
                                       <img src={adresse} alt='hotel manager'/>
                                       <span>Adresse</span>
                                       <p>Gold Stars Hotel Bunia,Ville de Bunia,Quartier Lumumba,
                                        Avenue du marche,Bunia, Democratic Republic of Congo.</p>                                     
                                    </div>
                                    <div className="#">
                                        <img src={tel} alt='hotel manager'/>
                                        <span>Telephone</span>                                       
                                        <p>+243 816 885 485</p>                                                                               
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
