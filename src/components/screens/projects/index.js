import React, { Component } from 'react';
import resto from '../../../assets/resto.jpg';
import easter from '../../../assets/easter.jpg';
import sqal from '../../../assets/sqal.jpg';
import deskalia from '../../../assets/deskalia.jpg';
import './index.scss';

class Projects extends Component {
 
  render() {
    return(
      <div className="Projects">
        <h1>M<span>es Proje</span>ts</h1>
        <div className="tot">
        <div className="project-wrapper">
          
             <h2> Projet fictif pour un restaurant</h2>
            <p>
              Il m'a a été demandé de développer
              un site vitrine pour un restaurateur
              expliquant le concept du restaurant
              et une partie administrateur permettant
              au restaurateur de changer le menu du jour
              ou la carte quand il le souhaite. 
              PS: ajouter /admin à l'url pour voir la partie
              administrateur concernant le menu du jour
              et ajouter /admin2 à l'url pour voir la partie
              administrateur concernant la carte du restaurant.
              Ce site est consultable via ce lien: {" "}
              <a href="http://campus-bordeaux.ovh/fish-n-git/" target="blank"> lien vers le site</a>
          </p>
          <img className="img-resto" src={resto} alt="restaurant" />
        </div>
        </div>
        
        <div className="tot2">
        <div className="project-wrapper">
          
             <h2> Site SQAL</h2>
            <p>
              Il m'a été demandé de refaire le site de la société SQAL en respectant
              une maquette réalisée par l'UX designer de notre société.
              Bien sûr le site est responsive.
              Ce site est consultable via ce lien: {" "}
              <a href="https://sqal-website.herokuapp.com/" target="blank">lien vers le site</a>
          </p>
          <img className="img-resto" src={sqal} alt="sqal" />
        </div>
        </div>
        <div className="tot">
        <div className="project-wrapper">
          
             <h2>Site de mise en relation entre avocats et clients</h2>
            <p>
              Il m'a a été demandé de développer
              un site permettant de choisir un avocat selon ses compétences et de pouvoir le contacter
              via une vidéconférence. 
              Ceci est faisaible dna sla rubrique "Nos conseillers" il faut clqiuer sur "choisissez votre conseiller" 
              et "contacter ce conseiller"
              Ce site est consultable via ce lien: {" "}
              <a href="https://dazzling-kowalevski-e41b9f.netlify.com/" target="blank"> lien vers le site</a>
          </p>
          <img className="img-resto" src={deskalia} alt="site avocats" />
        </div>
        </div>
        <div className="tot2">
        <div className="project-wrapper">
          
             <h2>Prix "coup de coeur" Hackaton 24h organisé à la wild code school
              en avril 2019</h2>
          <p>
              Les consignes étaient de créer un site sur le thème de pâques
              avec en bonus un easter-egg caché dans celui-ci.
              J'ai pris le parti de concevoir un site internet regroupant
              des cartes à collectionner à retrouver dans les chocolats
              de nos partenaires (Kinder, Milka, etc...).
              spoile: cliquez 21 fois sur l'oeuf vert situé en haut de page.
              Ce site est consultable via ce lien: {" "}
              <a href="https://dazzling-shannon-cd83bf.netlify.com/" target="blank">lien vers le site</a>
          </p>
          <img className="img-resto" src={easter} alt="restaurant" />
        </div>
        </div>

      </div>
    )
  }
}

export default Projects;