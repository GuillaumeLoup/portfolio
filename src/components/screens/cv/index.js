import React, { Component } from 'react';
import './index.scss';
import cv from "../../../assets/imgcv.jpg";

class Cv extends Component {
  render() {
    return(
      <div className="Cv">
        <img className="cv-img" src={cv} alt="cv" />
      </div>
    )
  }
}

export default Cv;