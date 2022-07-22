import React,{ useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Search } from "@material-ui/icons";
import { Toolbar, Fab, TextField, InputAdornment } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { isEmpty } from "../pages/Utils";
import Popup from '../pages/Popup';
import axios from 'axios';
import Salle from "../modals/Salle";


export const Salle = () =>{
    const [openPopupClient, setOpenPopupClient] = useState(false)
    const [dataToSave, setDataToSave] = useState()
  
    const [openPopupModification, setOpenPopupModification] = useState(false)
    const [dataModi, setDataModi] = useState()
  
    const Modification =(params)=>{
      setDataModi(params)
      setOpenPopupModification(true)
    }
    
    const columns = [
     
        { field: 'designation', headerName: 'Designation', width: 250, editable: true },
        { field: 'prix', headerName: 'Prix', width: 250, editable: true },    
        { field: 'Action', headerName: 'Actions', width: 260, editable: true,
        renderCell : (params)=>{
          return(
            <>
              <span style={{marginLeft:"5px", cursor:"pointer"}} onClick={(e)=>{
                setDataToSave(params.row)
                openPopupClient(true)
              }}><span style={{marginLeft:"15px", cursor:"pointer"}} ><Edit color="primary"/> Modifier</span></span>
              <button className='btn' ><DeleteIcon color="secondary"/>Supprimer</button>
              </>
          )
        }
      },
    ];

    const [openPopupForm, setOpenPopupForm] = useState(false)
    const [rows, setRows] = useState([])
    const [enregistrement, setEnregistrement] = useState()
    // useEffect(()=>{
    //   axios.get('http://localhost:8000/client')
    //   .then(res =>{
    //     setRows(res.data.client)
    //   })
    // },[enregistrement])
    // const deleteClient = async (id) =>{
    //   await axios.delete(`http://localhost:8000/client/${id}`)
    //     .then((res)=>{
    //       setRows(res.data);
    //     })        
    // };
    console.log(rows)

    const [filterFn, setFilterFn] = useState({fn:items=>{return items;}})
    const handleChange =(e)=>{
      let target = e.target    
      setFilterFn({
        fn:items =>{
          if(target.value === ""){
            return items
          }else{
            return items.filter(x=> x.noms.includes(target.value))
          }
          }
        })
      }
  

  return (
    <div className='dashboard container-fluid'>  
            <Toolbar>
                <TextField
                  style={{float:"right", marginLeft:"50px", width:"80%"}}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment:(<InputAdornment position="start">
                      <Search/>
                  
                    </InputAdornment>)
                  }}
                  />
                <Fab color="#c5933f!important" onClick={()=>setOpenPopupForm(true)} style={{marginLeft:"50px"}}>
                    <AddIcon/>
                </Fab>                
                  
            </Toolbar>                 
        {
        !isEmpty(rows) &&
            <div style={{ height: 400, width: '100%', marginTop:"12px" }}>
                 <DataGrid
                     rows={filterFn.fn(rows)}
                     columns={columns}
                     pageSize={5}
                     rowsPerPageOptions={[5]}
                     checkboxSelection
                     disableSelectionOnClick
                 />
             </div>
        }
        <Popup
            title="Entrer les informations actuelles de la salle"
            openPopup={openPopupModification}
            setOpenPopup={setOpenPopupModification}
            >  
                <Salle salle={dataModi} />
        </Popup>
        <Popup
        title={`Ajout de ${dataToSave && dataToSave.noms}`}
        openPopup={openPopupClient}
        setOpenPopup={setOpenPopupClient}
        >  
            <Salle data={dataToSave}/>
        </Popup>
    
        <Popup
        title="Enregistrement de la salle"
        openPopup={openPopupForm}
        setOpenPopup={setOpenPopupForm}
        >  
            <Salle salle={undefined} setEnregistrement={setEnregistrement}/>
        </Popup>    
         
    </div>
  );
}