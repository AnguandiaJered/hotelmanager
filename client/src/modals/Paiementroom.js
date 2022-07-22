import React, { useState, useEffect } from "react";
import { Refresh } from "@material-ui/icons"
import { FormControl, Input, InputLabel } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from "axios";

const Paiementroom = (props) => {
 
    const { paiementroom, setEnregistrement } = props
    console.log(paiementroom)

    const [loading, setLoading] = useState(false)
    const [data,setData] = useState({
        montant:"",
        libelle:"",
        reservation:"",
        author:"",
        id : new Date()
      });
      const {montant,libelle,reservation,author} = data;
        const handleChange = e =>{
            setData({...data,[e.target.name] : e.target.value});
        }

    useEffect(()=>{
        if(paiementroom){
            setData({...paiementroom})
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
                            <InputLabel>Reservation</InputLabel>                 
                            <select className='form-control' 
                            name='reservation' 
                            value={reservation} 
                            onChange={e => handleChange(e)}> 
                                <option value="">None</option>
                                <option value='M'>M</option>
                                <option value='F'>F</option>
                            </select>               
                        </div> 
                        <div className='form-group'> 
                            <InputLabel>Montant</InputLabel>              
                            <Input type="number" placeholder= "Entrer le montant" 
                            className='form-control' 
                            name='montant'  
                            value={montant}
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
                            <InputLabel>Author</InputLabel>                 
                            <select className='form-control' 
                            name='author' 
                            value={author} 
                            onChange={e => handleChange(e)}> 
                                <option value="">None</option>
                                <option value='M'>M</option>
                                <option value='F'>F</option>
                            </select>               
                        </div>  
                    </div>
                </div>
                <FormControl className='col-md-6'>
                    {
                        !paiementroom && <button className="btn btn-success" disabled={loading}  style={{marginRight:"10px"}}>
                        {loading && <Refresh/>} Enregistrer </button> 
                    }
                    {
                        paiementroom && <button className="btn btn-success boutton-classe" >Modifier</button>
                    }
                </FormControl>
          </form>
        </div>
    )
    
}
export default Paiementroom;
