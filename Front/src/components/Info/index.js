import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

import Laurent from '../../assets/images/laurent.png';
import Aimad from '../../assets/images/Aimad.png';
import Anna from '../../assets/images/Anna.png';
import Julien from '../../assets/images/Julien.png';

import '/src/components/Info/styles.scss';

const Info = () => (
  <div>
        <Header />

        <div className="info">
            <p className="info-text">
                Cette application s’adresse à toute personne ayant pour passion un sport de glisse et souhaitant se rendre sur les lieux de pratique en covoiturage avec d’autres passionnés.
                <br/>
                <br/>
                Proposer à l’utilisateur une recherche par centre d’intérêt quel qu’il soit dans un domaine précis  (art, culture, sport, danse, théâtre, musique, etc.) en filtrant davantage par thématique (salsa, bossa nova, danse classique,  moto, escalade, etc.), donc quelque soit l’appétence de l’utilisateur  et il pourra trouver un covoiturage avec une personne ayant la même passion.
                C’est cette spécificité communautaire qui est la particularité de notre application. Cela n’est plus un simple covoiturage, le trajet est  un moment enrichissant, de partage d’expériences, de conseils.
            </p>
            <div className="info-detail">
                <img  className="info-detail_img" src={Laurent} alt="image Laurent"/>
                <p className="info-detail_description">Laurent: Scrum Master / Lead Dev Back</p>
            </div>

            <div className="info-detail">
                <img  className="info-detail_img" src={Aimad} alt="image Aimad"/>
                <p className="info-detail_description">Aimad: Lead Dev Front</p>
            </div>

            <div className="info-detail">
                <img  className="info-detail_img" src={Anna} alt="image Anna"/>
                <p className="info-detail_description">Anna: Product Owner</p>
            </div>

            <div className="info-detail">
                <img  className="info-detail_img" src={Julien} alt="image Julien"/>
                <p className="info-detail_description">Julien: Git Master</p>
            </div>
        </div>

        <Footer />
  </div>
);

// Footer.proptypes = {

// };

export default Info;