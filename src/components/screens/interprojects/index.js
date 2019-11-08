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
          <FontAwesomeIcon
              icon="globe"
              color="rgb(11, 19, 134)"
              size="md"
            />
           Mes Projets
          </div>
        </NavLink>
      </div>
    )
  }
}

export default InterProj;