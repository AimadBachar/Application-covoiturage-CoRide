// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

// == Composant
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

// == Export
export default NotFoundPage;
