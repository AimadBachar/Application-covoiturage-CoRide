import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

import Field from 'src/components/ConnexionRegistration/Signin/Field';
import 'src/components/ConnexionRegistration/Signin/styles.scss';
import photoKite from 'src/assets/images/kitewindsurf.jpg';


const Signin = ({

    isSignedIn,
    signedMessage,
    firstname,
    lastname,
    user, // mail de l'utilisateur
    password,
    birthdate,
    changeField,
    handleSignin,
    //handleDateSelect,
    //handleDateChange,
  

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignin();
  };

  const [startDate, setStartDate] = useState(new Date());
  

  return (
  <div className="signin">
  <img className="login-photo" src={photoKite} alt="photo kite" />
  <div className="signin-form">
  {isSignedIn && (

<div className="signin-form-signed">
<Redirect from="/inscription" to="/" />
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
    >
      <h1 className="signin-form-title">
      Inscription
    </h1> 
        <Field 
          className="signin-form-input"
          type="text" //name?
          name="nom"
          placeholder="Nom"
          onChange={changeField}
          value={lastname}
          
        />
        <Field
          className="signin-form-input"
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
        />

 
  
      <Field
        className="signin-form-input"
        type="text"
        name="birthdate"
        placeholder="jj/mm/aaaa"
        maxlength="10"
        autocorrect="off"
        title="saisissez ici votre date de naissance au format indiqué"
        onChange={changeField} 
        value={birthdate} //date?
        /* type="date"
        name="date de naissance"
        placeholder="date de naissance"
        label="date de naissance"
        defaultValue="23-05-1990"*/
      />

      <Field
        className="signin-form-input"
        name="user"
        placeholder="Adresse Email"
        onChange={changeField}
        value={user}
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
        type="password"
        name="password"
        placeholder="Confirmez votre mot de passe"
        onChange={changeField}
        value={password}
        
      />
       <div className="signin-button">
      <button
        type="submit"
        className="signin-form-submit"
      >
        Valider
      </button>
      </div>
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
          
        </form>
    )}
        </div>
        </div>
        
  );
};


  Signin.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
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



/*
 <DatePicker 
  className="Datepicker"
  required
 // selected={startDate}
  //onChange={(date) => setStartDate(Date)} 
  selected={birthdate}
  name="birthdate"
 
  //onSelect={handleDateSelect} //when day is clicked
  onChange={handleDateChange} //only when value has changed
  //showTimeSelect
  placeholderText="Date de naissance"
  dateFormat="Pp"
  calendarClassName="rasta-stripes"
  popperModifiers={{
           offset: {
          enabled: true,
          offset: "0px, 0px"
                        },
         preventOverflow: {
         enabled: true,
         escapeWithReference: false,
         boundariesElement: "scrollParent"
                        }
                      }}
 
 
  />  


*/