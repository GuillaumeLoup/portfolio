import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

class Inter extends Component {
  render() {
    return(
      <div className="Inter">
        <NavLink to="/cv">
          <div className="wrapper">
          <span className="button-cv">
          <FontAwesomeIcon
              icon="id-card"
              color="rgb(236, 208, 37)"
              size="md"
            />
           Mon CV
           </span>
          </div>
        </NavLink>
      </div>
    )
  }
}

export default Inter;