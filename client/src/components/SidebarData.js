import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FaxIcon from '@mui/icons-material/Fax';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';


export const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <HomeIcon />     
    },
    {
        title: "Clients",
        path: "/client",
        icon: <AccountCircleIcon />     
    }, 
    {
        title: "Classe Chambre",
        path: "/classe",
        icon: <AcUnitIcon />,
    },  
    {
        title: "Chambres",
        path: "/room",
        icon: <BedroomParentIcon />,
    },
    {
        title: "Reservation Room",
        path: "/reservationroom",
        icon: <MeetingRoomIcon />,
    },
    {
        title: "Salles",
        path: "/salle",
        icon: <HouseboatIcon />,
    },
    {
        title: "Reservation Salles",
        path: "/reservationsalle",
        icon: <ShareLocationIcon />,
    } ,
    {
        title: "Paiements Hotel",
        path: "/paiementroom",
        icon: <CurrencyPoundIcon />     
    }, 
    {
        title: "Paiements Salle",
        path: "/paiementsalle",
        icon: <MonetizationOnIcon />     
    },
    {
        title: "Agents",
        path: "/agent",
        icon: <PersonIcon />     
    }, 
    {
        title: "Nos utilisateurs",
        path: "/users",
        icon: <PersonOutlineIcon />,
    },
  
];