import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/screens/home/index";
import Cv from "./components/screens/cv/index";
import Projects from './components/screens/projects/index';
import NavbarPort from './components/screens/navbar/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faIdCard, faGlobe, faMapMarkerAlt, faGavel } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faIdCard, faGlobe, faMapMarkerAlt, faGavel);

function App() {
  return (
    <div className="App">
      <NavbarPort />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/cv' component={Cv} />
      <Route path='/projects' component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
