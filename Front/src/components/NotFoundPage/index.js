import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import './styles.scss';

const NotFoundPage = () => (
  <div>
    <Header />
    <div className="not-found-page">
      <p className="not-found-page_text">Désolé, cette page n'est pas disponible</p>
      <Link
        className="not-found-page_link"
        to="/"
      >
        Retourner à la page d'accueil
      </Link>
    </div>
    <Footer />
  </div>
);

// Footer.proptypes = {

// };

export default NotFoundPage;
