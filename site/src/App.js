import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Footer from './components/Footer';
import {Services} from './components/Services';
import {Gallery} from './components/Gallery';
import {Reservation} from './components/Reservation';



function App() {
  
    return (
      <Router> 
       <Navbar /> 
          <Switch>      
            <Route exact path='/' component={Home}/>    
            <Route  path='/services' component={Services}/>    
            <Route  path='/gallery' component={Gallery}/>    
            <Route  path='/reservation' component={Reservation}/>    
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
      </Router>
    );
  }

export default App;
