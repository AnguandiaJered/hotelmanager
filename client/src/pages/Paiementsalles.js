import React,{ useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Search } from "@material-ui/icons";
import { Toolbar, Fab, TextField, InputAdornment } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { isEmpty } from "./Utils";
import Popup from './Popup';
import axios from 'axios';
import Paiementsalle from "../modals/Paiementsalle";


export const Paiementsalles = () =>{
    const [openPopupChow, setOpenPopupChow] = useState(false)
    const [dataToSave, setDataToSave] = useState()
  
    const [openPopupModification, setOpenPopupModification] = useState(false)
    const [dataModi, setDataModi] = useState()
  
    const Modification =(params)=>{
      setDataModi(params)
      setOpenPopupModification(true)
    }
    
    const columns = [
     
        { field: 'reservation', headerName: 'Reservation', width: 250, editable: true },
        { field: 'montant', headerName: 'Montant', width: 250, editable: true },
        { field: 'libelle', headerName: 'Libelle', width: 300, editable: true },
        { field: 'datereservation', headerName: 'Date Reservation', width: 250, editable: true },
        { field: 'author', headerName: 'Author', width: 100, editable: true },
        { field: 'Action', headerName: 'Actions', width: 260, editable: true,
        renderCell : (params)=>{
          return(
            <>
              <span style={{marginLeft:"5px", cursor:"pointer"}} onClick={(e)=>{
                setDataToSave(params.row)
                openPopupChow(true)
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
        <div className="row">
            <div className="col-lg-12">
                <div className="page-title mt-3 ml-4">
                    <h1 className="titre">Gold Stars International Hotel
                        {/* <small className="ml-3">Ujuzi Tracking</small> */}
                    </h1>
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="active"><i className="fa fa-dashboard"></i> Dashboard / Paiements Salles</li>
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
            title="Entrer les informations actuelles du Paiement Salles"
            openPopup={openPopupModification}
            setOpenPopup={setOpenPopupModification}
            >  
                <Paiementsalle paiementsalle={dataModi} />
        </Popup>
        <Popup
        title={`Ajout de ${dataToSave && dataToSave.noms}`}
        openPopup={openPopupChow}
        setOpenPopup={setOpenPopupChow}
        >  
            <Paiementsalle data={dataToSave}/>
        </Popup>
    
        <Popup
        title="Enregistrement du Paiement Salles"
        openPopup={openPopupForm}
        setOpenPopup={setOpenPopupForm}
        >  
            <Paiementsalle paiementsalle={undefined} setEnregistrement={setEnregistrement}/>
        </Popup>    
         
    </div>
  );
}