// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import detailsCardBanner from '/src/assets/images/canoe.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/logout-white.png';
import Nav from 'src/components/Nav';
import 'src/components/DetailsCard/HeaderDetailsCard/styles.scss';

// == Composant
const HeaderDetailsCard = ({
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
        <img className="header-photo" src={detailsCardBanner} alt="detailsCardBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
         <Nav logged={logged}/>
          <a onClick={logOut}>
            <img className="header-logout" src={logout} alt="logout" />
          </a>
      </div>
    )
  } else {
    return (
      <div className="header">
        <img className="header-photo" src={detailsCardBanner} alt="detailsCardBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <Nav logged={logged}/>
         <Link to="/connexion" exact>
          <img className="header-login" src={login} alt="login" />
         </Link>
      </div>
    )
  };     
};
HeaderDetailsCard.propTypes = {
  logged: PropTypes.bool,
};

// Valeurs par défaut pour les props
HeaderDetailsCard.defaultProps = {
  logged: false, 
};

// == Export 
export default HeaderDetailsCard;