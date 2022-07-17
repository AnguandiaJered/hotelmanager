import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


const Nav = () => {


  return (
    <AppBar position="fixed" className='navbar-top'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >           
            <div className="navbar-brand ml-5">
                <Link to="/" className="nav-link">
                  <img  src={logo} height={60} alt="hotel manager" />
                </Link>
            </div>
          </Typography>           
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>                   
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <ul className="navbar-nav mr-auto offset-4">                   
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/services'>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/gallery'>Galery</Link>
                    </li>           
                </ul>
                <ul className="navbar-nav mr-auto mt-2 offset-2">
                    <Link className='btn contact ' to='/contact'>Reservation</Link>
                    <Link className='btn connect ml-3' to='/login'>Se connecter</Link>
                </ul>  
            </nav>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
