import React, { useState, useEffect } from "react";
import { Refresh } from "@material-ui/icons"
import { FormControl, Input, InputLabel } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from "axios";

const Reservationsalle = (props) => {
 
    const {reservationsalle, setEnregistrement } = props
    console.log(reservationsalle)

    const [loading, setLoading] = useState(false)
    const [data,setData] = useState({
        client:"",
        salle:"",       
        libelle:"",
        dateceremonie:"",
        id : new Date()
      });
      const {client,salle,libelle,dateceremonie} = data;
        const handleChange = e =>{
            setData({...data,[e.target.name] : e.target.value});
        }

    useEffect(()=>{
        if(reservationsalle){
            setData({...reservationsalle})
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
                    <div className='col-md-12'>
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
                            <InputLabel>Salles</InputLabel>                 
                            <select className='form-control' 
                            name='salle' 
                            value={salle} 
                            onChange={e => handleChange(e)}> 
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
                            name='libelle' 
                            value={libelle} 
                            onChange={e => handleChange(e)} required/>
                        </div> 
                        <div className='form-group'> 
                            <InputLabel>Date de Ceremonie</InputLabel>                
                            <Input type="date" 
                            className='form-control' 
                            name='dateceremonie' 
                            value={dateceremonie} 
                            onChange={e => handleChange(e)} required/>
                        </div>                      
                    </div>
                </div>
                <FormControl className='col-md-6'>
                    {
                        !reservationsalle && <button className="btn btn-success" disabled={loading}  style={{marginRight:"10px"}}>
                        {loading && <Refresh/>} Enregistrer </button> 
                    }
                    {
                        reservationsalle && <button className="btn btn-success boutton-classe" >Modifier</button>
                    }
                </FormControl>
          </form>
        </div>
    )
    
}
export default Reservationsalle;
