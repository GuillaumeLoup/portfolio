import React, { Component } from 'react';
import profil from "../../../assets/profil.jpg";
import './index.scss';

class About extends Component {
  render() {
    return(
      <div className="About">
        <img className="img-profil" src={profil} alt="profil" />
        <div className="text-wrapper">
        <h1 className="name">Guillaume Loup</h1>
        <h3 className="job">développeur web full-stack ReactJs NodeJs</h3>
        <p className="description">
          Ayant une forte appétence pour l'informatique
           c'est tout naturellement que j'ai décidé
            de me former sur le langage Javascript
             et notamment le framework React, coté back-end j'utilise Node.
            Je suis passionné par mon travail et curieux
             d'en apprendre un peu plus chaque jour.
        </p>
        </div>
      </div>
    )
  }
}

export default About;