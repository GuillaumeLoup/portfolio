import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

class InterProj extends Component {
  render() {
    return(
      <div className="InterProj">
        <NavLink to="/projects">
          <div className="wrapper">
          <div className="button-cv">
          <FontAwesomeIcon
              icon="globe"
              color="rgb(236, 208, 37)"
              size="md"
            />
           Mes Projets
           </div>
          </div>
        </NavLink>
      </div>
    )
  }
}

export default InterProj;