// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Route, Redirect } from 'react-router-dom';

// == Import : local
import Field from 'src/components/Signin/Field';
import Header from 'src/components/Signin/HeaderSignin';

import 'src/components/Signin/styles.scss';


// == Composant
const Signin = ({
    isSignedIn,
    signedMessage,
    first_name,
    last_name,
    pseudo,
    email, 
    password,
    verifyPassword,
    birthdate,
    changeField,
    handleSignin,
    checkInputsContent
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    //on vérifie que tous les input sont remplis...
    const inputs = evt.target.querySelectorAll("input");
    const checkInputs = Array.from(inputs).find(input=>input.value ==="");

    if(checkInputs){
      console.log("tous les champs doivent être remplis");
      checkInputsContent({
        header:"Attention",
        message:"Tous les champs doivent être remplis."
      })

      return;
    }

    //on récupere la date de naissance et la date actuelle puis on calcule le nombre d'année en décimale
    const yearOfBirth = new Date(evt.target.querySelector('input[name="birthdate"]').value);  
    const dateNow = new Date();

    const isMajor = (dateNow - yearOfBirth)/(1000*3600*24*365);

    //on récupere le password, on construit notre regexp et on check
    const password = evt.target.querySelector('input[name="password"]').value;
    const regexp = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[-+!*#$@%_])([-+!*#$@%_\\w]{8,})$");

    const checkPassword = regexp.test(password);

    //on check le verifyPassword avec le password
    const verifyPassword = evt.target.querySelector('input[name="verifyPassword"]').value;

    //on check l'email
    const regexpMail = new RegExp("^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    const email = evt.target.querySelector('input[name="email"]').value;

    const checkEmail = regexpMail.test(email);

    //si l'utilisateur est mineur : return
    if(isMajor < 18) {
      console.log("tu es mineur...");
      checkInputsContent({
        header:"Attention",
        message:"Tu dois avoir plus de 18 ans pour t'inscrire."
      })

      return;
    }

    if(!checkEmail){
      console.log("email non valide");
      checkInputsContent({
        header:"Attention",
        message:"Le format de l'email n'est pas valide."
      })

      return;
    }

    //si le password est non conforme : return
    if(!checkPassword) {
      console.log("ton mot de passe n'est pas conforme au format attendu");
      checkInputsContent({
        header:"Attention",
        message:"Le mot de passe doit contenir au minimum 8 caractères dont un symbole (#&@$), 1 lettre en majuscule, 1 lettre en minuscule et 1 chiffre."
      })

      return;
    }

    if(checkPassword && (verifyPassword !== password)){
      console.log("attention les 2 mots de passe ne sont pas identique...");
      checkInputsContent({
        header:"Attention",
        message:"Les 2 mots de passe doivent être identique."
      })

      return;
    }
   
    //si les controles sont ok PARFAIT on valide
    handleSignin(evt.target);
     evt.target.reset();
  };

  return (

    <div className="signin">
      <Header />
        <ModalInfo open={open} header={header} message={message}/>
          <div className="signin-form">
            {isSignedIn && (
              <div className="signin-form-signed">
                <Redirect from="/inscription" to="/connexion" />
                <p className="signin-message">
                   {signedMessage}
                </p>
              </div>
            )}
            {!isSignedIn && (

              <form autoComplete="off" className="signin-form-element" onSubmit={handleSubmit} enctype="application/x-www-form-urlencoded">
                <h1 className="signin-form-title">
                  Inscription
                </h1> 
                  <Field 
                    className="signin-form-input"
                    type="text" 
                    name="last_name"
                    placeholder="Nom"
                    onChange={changeField}
                    value={last_name}
                  />
                  <Field
                    className="signin-form-input"
                    type="text"
                    name="first_name"
                    placeholder="Prénom"
                    onChange={changeField}
                    value={first_name}
                  />
                  <Field
                    className="signin-form-input"
                    type="text"
                    name="pseudo"
                    placeholder="Pseudo"
                    onChange={changeField}
                    value={pseudo}
                  />           
                  <Field
                    className="signin-form-input"
                    type="date"
                    name="birthdate"
                    placeholder="Date de naissance"
                    autocorrect="off"
                    data-date-split-input="true"
                    onChange={changeField} 
                    value={birthdate} 
                  />
                  <Field
                    className="signin-form-input"
                    type="email"
                    name="email"
                    placeholder="Adresse Email"
                    onChange={changeField}
                    value={email}
                  />
                  <Field
                    className="signin-form-input"
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    onChange={changeField}
                    value={password}
                  />
                  <Field
                      className="signin-form-input"
                      id="verifyPassword"
                      type="password"
                      name="verifyPassword"
                      placeholder="Confirmez votre mot de passe"
                      onChange={changeField}
                      value={verifyPassword}
                    />
                    <div className="signin-button">
                      <button
                        type="submit"
                        className="signin-form-submit"
                      >
                        Valider
                      </button>
                    </div>                                     
              </form>

            )}  
              <div className="login-redirection">
                 <p className="login-redirection-text">
                   Déjà membre ?            
                  <Link className="login-redirection-link" to="/connexion">
                    Connectez-vous
                   </Link>
                  </p>
              </div> 
          </div>
    </div>
                    
  );
};

Signin.propTypes = {
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  verifyPassword: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
  //open: PropTypes.string,
  header: PropTypes.string,
  message: PropTypes.string,
  isSignedIn: PropTypes.bool,
  signedMessage: PropTypes.string,
  //checkInputsContent: PropTypes.string,
};

// Valeurs par défaut pour les props
Signin.defaultProps = {
  isSignedIn: false,
  signedMessage: 'Signin Done',
};

// == Export
export default Signin;


