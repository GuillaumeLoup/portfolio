import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import profil from "../../../assets/profil.jpg";
import styles from 'react-awesome-slider/src/styles';
import './index.scss';
import './style.css';

class About extends Component {
  render() {
    const about = [{
      id : 1,
      text: "Ayant une forte appétence pour l'informatique c'est tout naturellement que j'ai décidé de me former sur le langage Javascript et notamment le framework React, coté back-end j'utilise Node. Je suis passionné par mon travail et curieux d'en apprendre un peu plus chaque jour.",
    },
    {
      id: 2,
      text: "Les technologies que j'utilise sont : JavaScript, React, Redux, Hooks, Css3, Html5, Bootstrap, Node, Express, Git, MySql "
    },
    {
      id: 3,
      text: "J'ai réalisé plusieurs projets visibles en cliquant sur la catégorie 'mes projets' tout à droite de l'écran"
    }
    ]
    return(
      <div className="About">
        <div className="img-wrap">
        <img className="img-profil" src={profil} alt="profil" />
        </div>
        <div className="text-wrapper">
        <h1 className="name">Guillaume Loup</h1>
        <h3 className="job">développeur web full-stack ReactJs NodeJs</h3>
        
      <AwesomeSlider
        cssModule={styles}
        bullets
        style={{background : "white", top: '10px', height: "100%"}}
        organicArrows
        className="align"
        zIndex={0}
      >
         {
              about.map((item, i) => <p className="description">{item.text}</p>)
            }
       
      </AwesomeSlider>
        {/* <p className="description">
          Ayant une forte appétence pour l'informatique
           c'est tout naturellement que j'ai décidé
            de me former sur le langage Javascript
             et notamment le framework React, coté back-end j'utilise Node.
            Je suis passionné par mon travail et curieux
             d'en apprendre un peu plus chaque jour.
        </p> */}
        </div>
      </div>
    )
  }
}

export default About;