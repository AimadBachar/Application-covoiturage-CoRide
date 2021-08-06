// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import brokensurf from '/src/assets/images/brokensurf.png';
import './styles.scss';

// == Composant
const NotFoundPage = () => (
  <div>
    <div className="not-found-page">
      <p className="not-found-page_oups">
        Oups ! 
        </p>
        <p className="not-found-page_texterror">
        La page que vous recherchez semble introuvable.
      </p>
      <img className="not-found-page_surf" src={brokensurf} alt="broken-surf" />      
      <p className="not-found-page_404">Code d'erreur : 404</p>
        <Link
          className="not-found-page_link"
          to="/"
        >
          RETOUR À LA PAGE D'ACCCUEIL
        </Link>
    </div>
  </div>
);

// == Export
export default NotFoundPage;
