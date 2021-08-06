// == Import == npm
import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/exit.png';
import Nav from '../Nav';
import './styles.scss';

// == Import : photos
import photo1 from '/src/assets/images/skate2.jpg';
import photo2 from '/src/assets/images/surfers.jpg';
import photo3 from '/src/assets/images/canoe.jpg';
import photo4 from '/src/assets/images/bmx.jpg';
import photo5 from '/src/assets/images/sup.jpg';
import photo6 from '/src/assets/images/wake1.jpg';
import photo7 from '/src/assets/images/kitesurf.jpg';
import photo8 from '/src/assets/images/surfgirl.jpg';

// == Composant
const Header = ({
  logged,
  onButtonClickLogout
}) => {
  const logOut = () => {
    localStorage.clear();
    onButtonClickLogout();
  };


//on genère une aleatoire

const [picture,randomPicture] = useState();

const pictures = [photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8];

useEffect(()=>{
  const index = Math.floor(Math.random()*pictures.length);  
  randomPicture(pictures[index]);
  });


  if (logged) {
    return (
      <div className="header">
        <div className="menu-desktop">
        <ul className="menu-desktop-title"></ul>
          <ul>
            <li>Accueil</li>
            <li>Info</li>
            <li>Contact</li>
            <li>Publier un trajet</li>
            <li>S'inscrire</li>
          </ul>
        </div>
        <img className="header-photo" src={picture} alt="detailsProfilBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <p className="slogan">Le covoiturage des passionnés!</p>
         <Nav logged={logged}/>
          <a onClick={logOut}>
            <img className="header-logout2" src={logout} alt="logout" />
          </a>
      </div>
    )
  } else {
    return (
      <div className="header">
           <div className="menu-desktop">
            <ul className="menu-desktop-title">
            <li>Accueil</li>
            <li>Info</li>
            <li>Contact</li>
            <li>Publier un trajet</li>
            <li>S'inscrire</li>
          </ul>
        </div>
        <img className="header-photo" src={picture} alt="detailsProfilBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <p className="slogan">Le covoiturage pour les passionnés!</p>
         <div className="concept">
           <p>Cette application s’adresse à toute personne ayant pour passion un sport de glisse et souhaitant se rendre sur les lieux de pratique en covoiturage avec d’autres passionnés.
              <br/>
              <br/>
              Proposer à l’utilisateur une recherche par centre d’intérêt quel qu’il soit dans un domaine précis  (art, culture, sport, danse, théâtre, musique, etc.) en filtrant davantage par thématique (salsa, bossa nova, danse classique,  moto, escalade, etc.), donc quelque soit l’appétence de l’utilisateur  et il pourra trouver un covoiturage avec une personne ayant la même passion.
              C’est cette spécificité communautaire qui est la particularité de notre application. Cela n’est plus un simple covoiturage, le trajet est  un moment enrichissant, de partage d’expériences, de conseils.
          </p>
         </div>
         <Nav logged={logged}/>
          <Link to="/connexion" exact>
            <img className="header-login" src={login} alt="login" />
        </Link>
      </div>
    )
  };      
};

Header.propTypes = {
  logged: PropTypes.bool,
};

// Valeurs par défaut pour les props
Header.defaultProps = {
  logged: false, 
};

// == Export 
export default Header;

