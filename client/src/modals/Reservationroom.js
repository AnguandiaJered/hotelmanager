import React, { useState, useEffect } from "react";
import { Refresh } from "@material-ui/icons"
import { FormControl, Input, InputLabel } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from "axios";

const Reservationroom = (props) => {
 
    const {reservationroom, setEnregistrement } = props
    console.log(reservationroom)

    const [loading, setLoading] = useState(false)
    const [data,setData] = useState({
        client:"",
        chambre:"",
        dateEntree:"",
        dateSortie:"",
        libelle:"",
        nombrejour:"",
        prix:"",
        id : new Date()
      });
      const {client,chambre,dateEntree,dateSortie,libelle,nombrejour,prix} = data;
        const handleChange = e =>{
            setData({...data,[e.target.name] : e.target.value});
        }

    useEffect(()=>{
        if(reservationroom){
            setData({...reservationroom})
        }
    },[])

    const [message, setMessage] = useState({
        title : "", error : ""
    });


    return(
        <div className="container-fluid">

             {message.error !== "" && 
                <Alert variant="filled" style={{marginBottom:"10px"}} severity={message.error}>
                    <h6>{message.title}</h6>
                </Alert>}
            <form>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'> 
                            <InputLabel>Clients</InputLabel>                 
                            <select className='form-control' 
                            name='client' 
                            value={client} 
                            onChange={e => handleChange(e)}> 
                                <option value="">None</option>
                                <option value='M'>M</option>
                                <option value='F'>F</option>
                            </select>               
                        </div> 
                        <div className='form-group'> 
                            <InputLabel>Chambres</InputLabel>                 
                            <select className='form-control' 
                            name='chambre' 
                            value={chambre} 
                            onChange={e => handleChange(e)}> 
                                <option value="">None</option>
                                <option value='M'>M</option>
                                <option value='F'>F</option>
                            </select>               
                        </div> 
                        <div className='form-group'> 
                            <InputLabel>Date Entrée</InputLabel>              
                            <Input type="date" 
                            className='form-control' 
                            name='dateEntree'  
                            value={dateEntree}
                            onChange={e => handleChange(e)} required/>
                        </div>  
                        <div className='form-group'> 
                            <InputLabel>Date Sortie</InputLabel>              
                            <Input type="date" 
                            className='form-control' 
                            name='dateSortie'  
                            value={dateSortie}
                            onChange={e => handleChange(e)} required/>
                        </div>                                        
                    </div>
                    <div className='col-md-6'>                                                 
                        <div className='form-group'> 
                            <InputLabel>Libelle</InputLabel>                
                            <Input type="text" placeholder='libelle' 
                            className='form-control' 
                            name='libelle' 
                            value={libelle} 
                            onChange={e => handleChange(e)} required/>
                        </div> 
                        <div className='form-group'> 
                            <InputLabel>Nombre de Jours</InputLabel>                
                            <Input type="number" placeholder='nombre de jour...' 
                            className='form-control' 
                            name='nombrejour' 
                            value={nombrejour} 
                            onChange={e => handleChange(e)} required/>
                        </div>
                        <div className='form-group'> 
                            <InputLabel>Prix</InputLabel>                
                            <Input type="number" placeholder='libelle' 
                            className='form-control' 
                            name='prix' 
                            value={prix} 
                            onChange={e => handleChange(e)} required/>
                        </div>  
                    </div>
                </div>
                <FormControl className='col-md-6'>
                    {
                        !reservationroom && <button className="btn btn-success" disabled={loading}  style={{marginRight:"10px"}}>
                        {loading && <Refresh/>} Enregistrer </button> 
                    }
                    {
                        reservationroom && <button className="btn btn-success boutton-classe" >Modifier</button>
                    }
                </FormControl>
          </form>
        </div>
    )
    
}
export default Reservationroom;
