// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == import : local
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

// == Composant
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

// == Export
export default NotFoundPage;
