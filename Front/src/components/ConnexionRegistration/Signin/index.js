import React from 'react';
// import PropTypes from 'prop-types';

import 'src/components/ConnexionRegistration/Signin/styles.scss';

const Signin = () => (

//props

  <div className="registration">
    <h1 className="registration-title">
      Inscription
    </h1>
    <form
      className="registration-form"
    >
      <div className="registration-name">
        <input
          className="registration-form_input__name nom"
          type="text"
          name="nom"
          placeholder="Nom"
        />
        <input
          className="registration-form_input__name"
          type="text"
          name="prénom"
          placeholder="Prénom"
        />
      </div>

      <input
        className="registration-form_input__name"
        type="text"
        name="text"
        placeholder="Pseudo"
      />

      <input
        className="registration-form_input"
        type="date"
        name="date de naissance"
        placeholder="Email"
      />

      <input
        className="registration-form_input"
        type="text"
        name="adresse"
        placeholder="Adresse"
      />

      <input
        className="registration-form_input"
        type="email"
        name="email"
        placeholder="Email"
      />

      <input
        className="registration-form_input password"
        type="text"
        name="password"
        placeholder="Mot de passe"
      />

      <input
        className="registration-form_input"
        type="text"
        name="password"
        placeholder="confirmer votre mot de passe"
      />
      <button
        type="submit"
        className="registration-form_submit"
      >
        Valider
      </button>
    </form>
  </div>
);

export default Signin;
