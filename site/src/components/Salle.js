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
                                <img src={heberger4} width={600} height={300} alt='hotel manager' className="heb" />
                                <img src={conference} width={600} height={300} className="mt-2 heb" alt='hotel manager' />
                            </div>
                            <div className='col-md-6 mt-5 ml-5'>
                                <h1>Reserver la salle de conference</h1>
                                <p>Vous avez besoin d'une salle de fete ou conference ? N'hésitez pas de prendre une reservation, notre équipe sera heureuse de vous accueillir</p>
                                <form>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='form-group'> 
                                                <InputLabel>Noms</InputLabel>                 
                                                <Input type="text" placeholder='Noms complet' 
                                                className='form-control' 
                                                required/>               
                                            </div>
                                            <div className='form-group'> 
                                                <InputLabel>Salles</InputLabel>                 
                                                <select className='form-control' > 
                                                    <option value="">None</option>
                                                    <option value='M'>M</option>
                                                    <option value='F'>F</option>
                                                </select>               
                                            </div>                                  
                                        </div>
                                        <div className='col-md-12'>                                                 
                                            <div className='form-group'> 
                                                <InputLabel>Libelle</InputLabel>                
                                                <Input type="text" placeholder='libelle' 
                                                className='form-control' 
                                                required/>
                                            </div> 
                                            <div className='form-group'> 
                                                <InputLabel>Date Ceremonie</InputLabel>                
                                                <Input type="date" 
                                                className='form-control' 
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
