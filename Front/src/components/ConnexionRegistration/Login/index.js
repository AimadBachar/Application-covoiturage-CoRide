import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/ConnexionRegistration/Login/Field';

import 'src/components/ConnexionRegistration/Login/styles.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">

      {isLogged && (
        <div className="login-logged">
          <p className="login-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form
          autoComplete="off"
          className="login-form-element"
          onSubmit={handleSubmit}
        >
          <h1 className="login-form-title">
            Connexion
          </h1>
          <Field
            className="login-form-input"
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            className="login-form-input"
            type="password"
            name="password"
            placeholder="mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-submit"
          >
            Ok
          </button>
        </form>
      )}
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

// Valeurs par défaut pour les props
Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

// == Export
export default Login;

// http://18.235.248.88:3000/api-docs
