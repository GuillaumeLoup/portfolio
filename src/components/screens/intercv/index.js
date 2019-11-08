import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

class Inter extends Component {
  render() {
    return(
      <div className="Inter">
        <NavLink to="/cv">
          <div className="wrapper">
           Mon CV
          </div>
        </NavLink>
      </div>
    )
  }
}

export default Inter;