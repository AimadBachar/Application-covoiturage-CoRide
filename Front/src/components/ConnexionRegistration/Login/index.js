import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Field from 'src/components/ConnexionRegistration/Login/Field';
import {
  Link,
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import 'src/components/ConnexionRegistration/Login/styles.scss';
import photoKite from 'src/assets/images/kite.jpg';

const Login = ({

  user,
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
<div className="login">
<img className="login-photo" src={photoKite} alt="photo kite" />
    <div className="login-form">
      {isLogged && (
      // useEffect(),
      <div className="login-form-logged">
        <Redirect from="/connexion" to="/" />
        <p className="login-message">

          {loggedMessage}

        </p>
        <button
          type="button"
          className="login-form-button"
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
            name="user"
            placeholder="Adresse Email"
            onChange={changeField}
            value={user}
          />
          <Field
            className="login-form-input"
            type="password"
            name="password"
            placeholder="mot de passe"
            onChange={changeField}
            value={password}
          />
          <div>
        
          <button
            type="submit"
            className="login-form-submit"
         > 
         Valider
          </button>
        
         <div className="signin">
            <p className="signin-text">
              Nouveau sur Co'Ride ?
            </p>
            <Link
              className="signin-link"
              to="/inscription"
            >
            S'inscrire
            </Link>
            </div>
          </div>
        </form>
      )}
        </div>
        </div>
        
  );
};

Login.propTypes = {
  user: PropTypes.string.isRequired,
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

/*
<div className="connexion">
<img className="connexion-photo" src={photoKite} alt="photo kite" />
*/
