import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
      Contactez-moi : 
      <div>
      <a href="mailto:guillaume.loup@live.fr" className="placement-a">
      <FontAwesomeIcon
        icon="envelope"
        color="blue"
        size="md"
      />
      </a>
      <a href="tel:+33672197270">
      <FontAwesomeIcon
        icon="phone-square"
        color="green"
        size="md"
      />
      </a>
      </div>
      </div>
    )
  }
}

export default Footer;