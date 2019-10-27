import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

class InterProj extends Component {
  render() {
    return(
      <div className="InterProj">
        <NavLink to="/projects">
          <div className="wrapper">
           Mes Projets
          </div>
        </NavLink>
      </div>
    )
  }
}

export default InterProj;