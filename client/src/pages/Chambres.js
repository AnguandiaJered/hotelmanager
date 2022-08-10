import React,{ useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Search } from "@material-ui/icons";
import { Toolbar, Fab, TextField, InputAdornment } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { isEmpty } from "./Utils";
import Popup from './Popup';
import axios from 'axios';
import Chambre from "../modals/Chambre";


export const Chambres = () =>{
    const [openPopupChow, setOpenPopupChow] = useState(false)
    const [dataToSave, setDataToSave] = useState()
  
    const [openPopupModification, setOpenPopupModification] = useState(false)
    const [dataModi, setDataModi] = useState()
  
    const Modification =(params)=>{
      setDataModi(params)
      setOpenPopupModification(true)
    }
    
    const columns = [
     
        { field: 'numroom', headerName: 'Numero Chambre', width: 250, editable: true },
        { field: 'telephone', headerName: 'Telephone', width: 250, editable: true },
        { field: 'classe', headerName: 'Classe Chambre', width: 250, editable: true },
        { field: 'Action', headerName: 'Actions', width: 260, editable: true,
        renderCell : (params)=>{
          return(
            <>
              <span style={{marginLeft:"15px", cursor:"pointer"}} onClick={(e)=>{
                setDataToSave(params.row)
                openPopupAgent(true)
              }}><span style={{marginLeft:"15px", cursor:"pointer"}} onClick={()=> Modification(params.row)}><Edit color="primary"/> Modifier</span></span>
              <button className='btn' onClick={()=> deleteRooms(params.row._id)}><DeleteIcon color="secondary"/>Supprimer</button>
              </>
          )
        }
      },
    ];

    const [openPopupForm, setOpenPopupForm] = useState(false)
    const [rows, setRows] = useState([])
    const [enregistrement, setEnregistrement] = useState()
    useEffect(()=>{
      axios.get('http://localhost:8000/room')
      .then(res =>{
        setRows(res.data.rooms)
      })
    },[enregistrement])
    const deleteRooms = async (id) =>{
      await axios.delete(`http://localhost:8000/room/${id}`)
        .then((res)=>{
          setRows(res.data);
        })        
    };
    console.log(rows)

    const [filterFn, setFilterFn] = useState({fn:items=>{return items;}})
    const handleChange =(e)=>{
      let target = e.target    
      setFilterFn({
        fn:items =>{
          if(target.value === ""){
            return items
          }else{
            return items.filter(x=> x.numroom.includes(target.value))
          }
          }
        })
      }
  

  return (
    <div className='dashboard container-fluid'>
        <div className="row">
            <div className="col-lg-12">
                <div className="page-title mt-3 ml-4">
                    <h1 className="titre">Gold Stars International Hotel
                        {/* <small className="ml-3">Ujuzi Tracking</small> */}
                    </h1>
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="active"><i className="fa fa-dashboard"></i> Dashboard / Chambres</li>
                        </ol>
                    </div>                            
                </div>
            </div>
        </div>
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
            title="Entrer les informations actuelles de la chambre"
            openPopup={openPopupModification}
            setOpenPopup={setOpenPopupModification}
            >  
                <Chambre chambre={dataModi} />
        </Popup>
        <Popup
        title={`Ajout de ${dataToSave && dataToSave.noms}`}
        openPopup={openPopupChow}
        setOpenPopup={setOpenPopupChow}
        >  
            <Chambre data={dataToSave}/>
        </Popup>
    
        <Popup
        title="Enregistrement de la chambre"
        openPopup={openPopupForm}
        setOpenPopup={setOpenPopupForm}
        >  
            <Chambre chambre={undefined} setEnregistrement={setEnregistrement}/>
        </Popup>    
         
    </div>
  );
}