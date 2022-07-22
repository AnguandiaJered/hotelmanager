import React,{ Fragment } from 'react';
import heberger from '../images/heberger.jpg';
import heberger2 from '../images/heberger2.png';
import { FormControl, Input, InputLabel } from '@mui/material';


export const Chambre = () =>{
    return(
        <Fragment>
            <div className='chambre mt-5'>
                <div className='container-fluid'>                    
                    <div className='ml-5 mt-5'>
                        <div className='row'>
                            <div className='col-md-6 mt-5'>
                            <h1>Reserver la chambre</h1>
                            <p>Vous avez besoin d'une chambre ? N'hésitez pas de prendre une reservation, notre équipe sera heureuse de vous accueillir</p>
                            <form>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>  
                                        <InputLabel>Noms Clients</InputLabel>             
                                            <Input type="text" placeholder= "Entrer les noms" 
                                            className='form-control' 
                                            name='noms'  
                                            required/>
                                        </div>
                                        <div className='form-group'>  
                                        <InputLabel>catégories chambre</InputLabel>                 
                                            <select className='form-control' placeholder= "Classe chambre"
                                            name='classe'> 
                                                <option value="">None</option>
                                                <option value='M'>M</option>
                                                <option value='F'>F</option>
                                            </select>               
                                        </div>
                                        <div className='form-group'>   
                                        <InputLabel>Numero chambre</InputLabel>                
                                            <select className='form-control' placeholder= "chambre"
                                            name='classe'> 
                                                <option value="">None</option>
                                                <option value='M'>M</option>
                                                <option value='F'>F</option>
                                            </select>               
                                        </div>
                                        <div className='form-group'>  
                                        <InputLabel>Date Entrée</InputLabel>                
                                            <Input type="date" className='form-control' 
                                            name='adresse' 
                                            required/>
                                        </div> 
                                    </div> 
                                    <div className='col-md-6'>                                  
                                        <div className='form-group'>
                                        <InputLabel>Date Sortie</InputLabel>                  
                                            <Input type="date" className='form-control' 
                                            name='adresse' 
                                            required/>
                                        </div>
                                        <div className='form-group'> 
                                        <InputLabel>Libelle</InputLabel>                   
                                            <Input type="text" placeholder='detail de la chambre' 
                                            className='form-control' 
                                            name='mail' 
                                            required/>
                                        </div>
                                        <div className='form-group'>
                                        <InputLabel>Nombre de jour</InputLabel>                  
                                            <Input type="number" placeholder='Nombre de jour' 
                                            className='form-control' 
                                            name='adresse' 
                                            required/>
                                        </div>
                                        <div className='form-group'> 
                                        <InputLabel>Provenance</InputLabel>                 
                                            <Input type="text" placeholder='Provenance' 
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
                            <div className='col-md-5 mt-5 ml-5'>
                                <img src={heberger} width={600} height={300} alt='hotel manager' />
                                <img src={heberger2} width={600} height={300} className="mt-2" alt='hotel manager' />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
