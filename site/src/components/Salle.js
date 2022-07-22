import React,{ Fragment } from 'react';
import conference from '../images/conference.jpg';
import heberger4 from '../images/heberger4.JPG';
import { FormControl, Input, InputLabel } from '@mui/material';


export const Salle = () =>{
    return(
        <Fragment>
            <div className='salle'>
                <div className='container-fluid'>                    
                    <div className='ml-5'>
                        <div className='row'>
                            <div className='col-md-5 mt-5'>
                                <img src={heberger4} width={600} height={300} alt='hotel manager' />
                                <img src={conference} width={600} height={300} className="mt-2" alt='hotel manager' />
                            </div>
                            <div className='col-md-6 mt-5 ml-5'>
                            <h1>Reserver la salle de conference</h1>
                            <p>Vous avez besoin d'une salle de fete ou conference ? N'hésitez pas de prendre une reservation, notre équipe sera heureuse de vous accueillir</p>
                            <form>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <InputLabel>Noms Clients</InputLabel>              
                                            <Input type="text" placeholder= "Entrer les noms" 
                                            className='form-control' 
                                            name='noms'  
                                            required/>
                                        </div>
                                        <div className='form-group'>   
                                        <InputLabel>Salles</InputLabel>                
                                            <select className='form-control' placeholder= "Salle"
                                            name='classe'> 
                                                <option value="">None</option>
                                                <option value='M'>M</option>
                                                <option value='F'>F</option>
                                            </select>               
                                        </div>                                                                       
                                        <div className='form-group'> 
                                        <InputLabel>Detail ceremonie</InputLabel>                   
                                            <Input type="text" placeholder='detail de la ceremonie' 
                                            className='form-control' 
                                            name='mail' 
                                            required/>
                                        </div>                                      
                                        <div className='form-group'> 
                                        <InputLabel>Date ceremonie</InputLabel>                 
                                            <Input type="date" placeholder='Date ceremonie' 
                                            className='form-control' 
                                            name='adresse' 
                                            required/>
                                        </div>
                                    </div>
                                </div>
                                <FormControl className='col-md-6'>                    
                                    <button className="btn btn-primary"   style={{marginRight:"10px"}}>Enregistrer </button>                    
                                </FormControl>
                            </form>
                            </div>                          
                        </div>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
