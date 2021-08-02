import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


import './styles.scss';

const NotFoundPage = () => (
  <div>

    <div className="not-found-page">
      <p className="not-found-page_text">Désolé, cette page n'est pas disponible</p>
      <Link
        className="not-found-page_link"
        to="/"
      >
        Retourner à la page d'accueil
      </Link>
    </div>

  </div>
);

// Footer.proptypes = {

// };

export default NotFoundPage;
