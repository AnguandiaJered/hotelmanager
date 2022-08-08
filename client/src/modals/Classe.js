import React, { useState, useEffect } from "react";
import { Refresh } from "@material-ui/icons"
import { FormControl, Input, InputLabel } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from "axios";


const Classe = (props) => {
 
    const { classe, setEnregistrement } = props
   

    const [loading, setLoading] = useState(false)
    const [data,setData] = useState({
        designation:"",
        montant:"",     
        id : new Date()
      });
      const {designation,montant} = data;
        const handleChange = e =>{
            setData({...data,[e.target.name] : e.target.value});
        }

    useEffect(()=>{
        if(classe){
            setData({...classe})
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
                            <InputLabel>Designation</InputLabel>              
                            <Input type="text" placeholder= "Entrer la designation" 
                            className='form-control col-md-12' 
                            name='designation'  
                            value={designation}
                            onChange={e => handleChange(e)} required/>
                        </div>
                        <div className='form-group'>
                            <InputLabel>Montant</InputLabel>                   
                            <Input type="number" placeholder='montant' 
                            className='form-control col-md-12' 
                            name='montant' 
                            value={montant} 
                            onChange={e => handleChange(e)} required/>
                        </div>                    
                    </div>                   
                </div>
                <FormControl className='col-md-6'>
                    {
                        !classe && <button className="btn btn-success" disabled={loading}  style={{marginRight:"10px"}}>
                        {loading && <Refresh/>} Enregistrer </button> 
                    }
                    {
                        classe && <button className="btn btn-success boutton-classe" >Modifier</button>
                    }
                </FormControl>
          </form>
        </div>
    )
    
}
export default Classe;
