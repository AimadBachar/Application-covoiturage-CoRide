import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Redirect } from 'react-router-dom';
import axios from 'axios';

//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes, { func } from 'prop-types';

import Field from 'src/components/Signin/Field';
import 'src/components/Signin/styles.scss';
import photoKite from 'src/assets/images/kitewindsurf.jpg';


const Signin = ({

    isSignedIn,
    signedMessage,
    picture,
    first_name,
    last_name,
    pseudo,
    email, // mail de l'utilisateur
    password,
    verifyPassword,
    birthdate,
    changeField,
    handleSignin,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

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

    //si mineur return
    if(isMajor < 18) {
      console.log("tu es mineur...")
      return;
    }

    //si password non conform return
    if(!checkPassword) {
      console.log("ton mot de passe n'est pas conforme au format attendu")
      return;
    }

    if(checkPassword && (verifyPassword !== password)){
      console.log("attention les 2 mots de passe ne sont pas identique...")
      return;
    }
   
    //si les controles sont ok PARFAIT on valide
    console.log("tu es majeur et le mot de passe est conforme au format attendu, pas d'erreur entre les 2 champs password");
    handleSignin(evt.target);
    
  };

  
  /*
  const [password, setPassword] = useState("");
  const [confirmPassword, checkValidation] = useState("");*/

    
  
  const handleUpload = (evt) => {
    console.log(evt.target.files[0]);
    this.setState({ picture: evt.target.files[0] });
  };


  return (
  <div className="signin">
  <img className="login-photo" src={photoKite} alt="photo kite" />
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

    <form
      autoComplete="off"
      className="signin-form-element"
      onSubmit={handleSubmit}
      enctype="application/x-www-form-urlencoded"
    >
      <h1 className="signin-form-title">
      Inscription
    </h1> 
    
        <Field 
          className="signin-form-input"
          type="text" //name?
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

    
      <input 
          className="signin-form-input"
          type="file"
          name="picture"
          placeholder="Picture"
          accept="image/png, image/jpeg"
          onChange={handleUpload}
        //TODO style du champ file à faire
                      
        />
  
      <Field
        className="signin-form-input"
        type="date"
        name="birthdate"
        placeholder="your birthdate"
        autocorrect="off"
        data-date-split-input="true"
        onChange={changeField} 
        value={birthdate} //date?

        
 
        /* 
        label="date de naissance"
        defaultValue="23-05-1990"*/
      />

      <Field
        className="signin-form-input"
        name="email"
        placeholder="Adresse Email"
        onChange={changeField}
        value={email}
      />

      <Field
        className="signin-form-input"
        id="password"
        type="password"
        name="password"
        placeholder="Mot de passe"
        onChange={changeField}
        //onChange={(evt) => setPassword(evt.target.value)}
        value={password}
      />

    <Field
        className="signin-form-input"
        id="verifyPassword"
        type="password"
        name="verifyPassword"
        placeholder="Confirmez votre mot de passe"
        onChange={changeField}
        //onChange={(evt) => setPassword(evt.target.value)}
        value={verifyPassword}
      />

 {/*<div data-validate="Confirm Password is required">
      <Field
        className="signin-form-input"
        id="confirmpassword"
        type="password"
        name="confirmPass"
        placeholder="Confirmez votre mot de passe"
        onChange={changeField}
        //onChange={(evt) => checkValidation(evt.target.value)}
        value={password}       
      />

</div>*/}

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
        <Link
          className="login-redirection-link"
          to="/connexion"
        >
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
  isSignedIn: PropTypes.bool,
};

// Valeurs par défaut pour les props
Signin.defaultProps = {
  isSignedIn: false,
  signedMessage: 'Signin Done',
};



export default Signin;


