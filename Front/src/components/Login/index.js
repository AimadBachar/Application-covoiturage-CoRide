// == Import : npm
import React  from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, BrowserRouter as Route } from 'react-router-dom';

// == Import : local
import ModalInfo from 'src/containers/ModalInfo';
import Field from 'src/components/Login/Field';
import 'src/components/Login/styles.scss';

// == Composant
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
       <div className="login-form">
        {isLogged && (
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

          <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
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
              <div className="button">
                <button
                  type="submit"
                  className="login-form-submit"
                > 
                  Valider
                </button>
              </div>
              <div className="signin-redirection">
                <p className="signin-redirection-text">
                   Nouveau sur Co'Ride ?
                </p>
                  <Link className="signin-redirection-link" to="/inscription">
                      S'inscrire
                  </Link>
              </div>         
            </form>
          )}
        </div>
    </div>       
  );
};

Login.propTypes = {
  user: PropTypes.string,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
  header: PropTypes.string,
  message: PropTypes.string,
};

// Valeurs par défaut pour les props
Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

// == Export
export default Login;