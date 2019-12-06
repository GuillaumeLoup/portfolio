import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import profil from "../../../assets/profil.jpg";
import styles from 'react-awesome-slider/src/styles';
import js from '../../../assets/js.png';
import css from '../../../assets/css.png';
import react from '../../../assets/react.png';
import node from '../../../assets/node.png';
import redux from '../../../assets/redux.png';
import bootstrap from '../../../assets/bootstrap.png';
import html from '../../../assets/html.png';
import mysql from '../../../assets/mysql.png';
import './index.scss';
import './style.css';

class About extends Component {
  render() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
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
      text: "J'ai réalisé plusieurs projets visibles en cliquant sur la catégorie 'mes projets' tout à droite de l'écran ou en bas si vous êtes en version mobile"
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
        <div className="logo-wrapper">
        <img src={js} alt="js"/>
        <img src={react} alt="react"/>
        <img src={node} alt="node"/>
        <img src={redux} alt="redux"/>
        <img src={html} alt="html"/>
        <img src={css} alt="css"/>
        <img src={bootstrap} alt="bootstrap"/>
        <img src={mysql} alt="mysql"/>
        </div>
        <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={5000}
     cssModule={styles}
     style={{background : "white", top: '10px', height: "50%"}}
        organicArrows
        className="align"
        zIndex={0}
  >
      {/* <AwesomeSlider
        play={true}
        cssModule={styles}
        bullets
        style={{background : "white", top: '10px', height: "50%"}}
        organicArrows
        className="align"
        zIndex={0}
      > */}
      
         {
              about.map((item, i) => <p className="description">{item.text}</p>)
            }
       
      {/* </AwesomeSlider> */}
      </AutoplaySlider>
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