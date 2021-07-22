import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import './styles.scss';

const NotFoundPage = () => (
  <div>
    <Header />

    <div className="pageProfil">
      <div className="profil">
        {/* picture */}
        <h1 className="profil-title">Informations du profil</h1>
        <form className="profil-form">
          <input
            className="profil-form_input"
            type="text"
            name="prénom"
            placeholder="Prénom"
          />
          <input
            className="profil-form_input"
            type="text"
            name="nom"
            placeholder="Nom"
          />

          <input
            className="profil-form_input"
            type="text"
            name="pseudo"
            placeholder="Pseudo"
          />
          <input
            className="profil-form_input date"
            type="date"
            name="date"
            placeholder="Date"
          />
          <input
            className="profil-form_input"
            type="number"
            name="age"
            placeholder="Age"
          />

          <input
            className="profil-form_input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="profil-form_input"
            type="password"
            name="password"
            placeholder="Password"
          />

          <input
            className="profil-form_input"
            type="text"
            name="adresse"
            placeholder="Adresse"
          />
          <input
            className="profil-form_input"
            type="text"
            name="ville"
            placeholder="Ville"
          />
          <input
            className="profil-form_input"
            type="number"
            name="code postal"
            placeholder="Code postal"
          />
          <input
            className="profil-form_input"
            type="text"
            name="pays"
            placeholder="Pays"
          />

          <div className="checkbox">
            <p className="checkbox_text">Choisi une ou plusieurs activités:</p>
            <label className="checkbox_input">
              <input
                type="checkbox"
                name="surf"
              />
              Surf
            </label>

            <label className="checkbox_input">
              <input
                className="blabla"
                type="checkbox"
                name="kite"
              />
              Kite
            </label>
          </div>
          {/* checkbox */}

          <input
            className="profil-form_input"
            type="text"
            name="voiture"
            placeholder="Voiture"
          />
          <input
            className="profil-form_input"
            type="text"
            name="modele"
            placeholder="Modele"
          />

          <button type="submit" className="profil-form_button">
            Sauvegarder vos informations
          </button>

          <button type="submit" className="profil-form_button">
            Annuler
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

// Footer.proptypes = {

// };

export default NotFoundPage;
