import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/ConnexionRegistration/Signin/Field';
import 'src/components/ConnexionRegistration/Signin/styles.scss';

const Signin = () => (

//props

  <div className="signin">
  <div className="signin-form">
    <form
      autoComplete="off"
      className="signin-form-element"
      //onSubmit={handleSubmit}
    >
      <h1 className="signin-form-title">
      Inscription
    </h1>
  
      <div className="signin-form-name">
        <Field 
          className="signin-form-input"
          type="text"
          name="nom"
          placeholder="Nom"
        />
        <Field
          className="signin-form-input"
          type="text"
          name="prénom"
          placeholder="Prénom"
        />
      </div>

      <Field
        className="signin-form-input"
        type="text"
        name="text"
        placeholder="Pseudo"
      />

      <Field
        className="signin-form-input"
        type="date"
        name="date de naissance"
        placeholder="date de naissance"
        label="date de naissance"
        defaultValue="23-05-1990"
      />

      <Field
        className="signin-form-input"
        type="text"
        name="adresse"
        placeholder="Adresse"
      />

      <Field
        className="signin-form-input"
        type="email"
        name="email"
        placeholder="Email"
      />

      <Field
        className="signin-form-input password"
        type="text"
        name="password"
        placeholder="Mot de passe"
      />

      <Field
        className="signin-form-input"
        type="text"
        name="password"
        placeholder="confirmer votre mot de passe"
      />
      <button
        type="submit"
        className="signin-form-submit"
      >
        Valider
      </button>
    </form>
  </div>
  </div>
);

Signin.propTypes = {
  user: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

// Valeurs par défaut pour les props
Signin.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};



export default Signin;
