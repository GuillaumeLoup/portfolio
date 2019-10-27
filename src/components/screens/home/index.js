import React, { Component } from 'react';
import About from '../about/index';
import Inter from '../intercv/index';
import InterProj from '../interprojects/index';
import './index.scss';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <About />
        <Inter />
        <InterProj />
      </div>
    )
  }
}

export default Home;