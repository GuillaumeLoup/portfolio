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
          <FontAwesomeIcon
              icon="id-card"
              color="rgb(0, 3, 44)"
              size="md"
            />
           Mon CV
          </div>
        </NavLink>
      </div>
    )
  }
}

export default Inter;