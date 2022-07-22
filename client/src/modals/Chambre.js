import React, { useState, useEffect } from "react";
import { Refresh } from "@material-ui/icons"
import { FormControl, Input, InputLabel } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from "axios";


const Chambre = (props) => {
 
    const { chambre, setEnregistrement } = props
    console.log(chambre)

    const [loading, setLoading] = useState(false)
    const [data,setData] = useState({
        numroom:"",
        telephone:"",
        classe:"",      
        id : new Date()
      });
      const {numroom,telephone,classe} = data;
        const handleChange = e =>{
            setData({...data,[e.target.name] : e.target.value});
        }

    useEffect(()=>{
        if(chambre){
            setData({...chambre})
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
                            <InputLabel>Numero chambre</InputLabel>              
                            <Input type="number" placeholder= "Entrer le numero" 
                            className='form-control' 
                            name='numroom'  
                            value={numroom}
                            onChange={e => handleChange(e)} required/>
                        </div>
                        <div className='form-group'>
                            <InputLabel>Telephone</InputLabel>                   
                            <Input type="tel" placeholder='phone numbre' 
                            className='form-control' 
                            name='telephone' 
                            value={telephone} 
                            onChange={e => handleChange(e)} required/>
                        </div>
                        <div className='form-group'> 
                            <InputLabel>Classe Chambre</InputLabel>                 
                            <select className='form-control' 
                            name='classe' 
                            value={classe} 
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
                        !chambre && <button className="btn btn-success" disabled={loading}  style={{marginRight:"10px"}}>
                        {loading && <Refresh/>} Enregistrer </button> 
                    }
                    {
                        chambre && <button className="btn btn-success boutton-classe" >Modifier</button>
                    }
                </FormControl>
          </form>
        </div>
    )
    
}
export default Chambre;
