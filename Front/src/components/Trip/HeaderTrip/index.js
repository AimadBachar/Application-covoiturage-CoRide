
// Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import headerTripBanner from '/src/assets/images/skate2.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/exit.png';
import Nav from 'src/components/Nav';
import 'src/components/Trip/HeaderTrip/styles.scss';

// == Composant
const HeaderTrip = ({
  logged,
  onButtonClickLogout

}) => {
  const logOut = () => {
    localStorage.clear();
    onButtonClickLogout();
  };

  if (logged) {
    return (
      <div className="header">
        <img className="header-photo" src={headerTripBanner} alt="headerTripBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <p className="slogan">Le covoiturage des passionnés!</p>
          <Nav logged={logged}/>
            <a onClick={logOut}>
              <img className="header-logout" src={logout} alt="logout" />
          </a>
      </div>
    )
  } else {
    return (
      <div className="header">
        <img className="header-photo" src={headerTripBanner} alt="headerTripBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <p className="slogan">Le covoiturage des passionnés!</p>
        <Nav logged={logged}/>
         <Link to="/connexion" exact>
           <img className="header-login" src={login} alt="login" />
        </Link>
      </div>
    )
  }      
};

HeaderTrip.propTypes = {
  logged: PropTypes.bool,
};

// Valeurs par défaut pour les props
HeaderTrip.defaultProps = {
  logged: false, 
};

// == Export
export default HeaderTrip;