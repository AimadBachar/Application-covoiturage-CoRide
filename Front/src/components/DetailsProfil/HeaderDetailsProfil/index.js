// == Import : npm
import React,{Suspense} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
// == Import : local
import detailsProfilBanner from '/src/assets/images/bmx.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/exit.png';
import Nav from 'src/components/Nav';
import 'src/components/DetailsProfil/HeaderDetailsProfil/styles.scss';

// == Composant
const HeaderDetailsProfil = ({
  logged,
  onButtonClickLogout
}) => {
  const logOut = () => {
    localStorage.clear();
    onButtonClickLogout();
  };

  const imagePreload = ()=>{
    const {src} = useImage({srcList:detailsProfilBanner});
    return <img className="header-photo" src={ src } alt="detailsProfilBanner" />
  }

  if (logged) {
    return (
      <div className="header">
        <img className="header-photo" src={detailsProfilBanner} alt="detailsProfilBanner" />
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
        <img className="header-photo" src={detailsProfilBanner} alt="detailsProfilBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <p className="slogan">Le covoiturage des passionnés!</p>
         <Nav logged={logged}/>
           <Link to="/connexion" exact>
             <img className="header-login" src={login} alt="login" />
           </Link>
      </div>
    )
  };     
};

HeaderDetailsProfil.propTypes = {
  onButtonClickLogout: PropTypes.string.isRequired,
  logged: PropTypes.bool,
};

// Valeurs par défaut pour les props
HeaderDetailsProfil.defaultProps = {
  logged: false, 
};

// == Export 
export default HeaderDetailsProfil;