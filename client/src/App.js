import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {Sidebar} from './components/Sidebar';
import ErrorPage from './components/ErrorPage';
import {Clients} from './pages/Clients';
import {Agents} from './pages/Agents';
import {Utilisateur} from './pages/Utilisateur';
import {Chambres} from './pages/Chambres';
import {Classes} from './pages/Classes';
import {Reservationrooms} from './pages/Reservationrooms';
import {Reservationsalles} from './pages/Reservationsalles';
import {Paiementrooms} from './pages/Paiementrooms';
import {Paiementsalles} from './pages/Paiementsalles';




function App() {
  
    return (
      <Router> 
       <Navbar /> 
       <Sidebar /> 
          <Switch>   
            <Route path='/client' component={Clients}/>
            <Route path='/agent' component={Agents}/>
            <Route path='/users' component={Utilisateur}/>
            <Route path='/room' component={Chambres}/>
            <Route path='/classe' component={Classes}/>
            <Route path='/reservationroom' component={Reservationrooms}/>
            <Route path='/reservationsalle' component={Reservationsalles}/>
            <Route path='/paiementroom' component={Paiementrooms}/>
            <Route path='/paiementsalle' component={Paiementsalles}/>
            <Route component={ErrorPage} />
          </Switch>
      </Router>
    );
  }

export default App;

