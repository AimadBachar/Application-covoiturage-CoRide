import React from 'react';
import { Link, BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//import Header from '../Header';
//import Footer from '../Footer';

import Field from 'src/components/ProfilUser/Field';
import 'src/components/ProfilUser/styles.scss';

const ProfilUser = ({

activity_id,
tags,
lastname,
firstname,
pseudo,
user,
password,
adress,
city,
codeZip,
country,
typeCar,
modelCar,
date,
age,

isCompleted,
profilCompletedMessage,
//changeField,
handleProfil,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
    handleProfil();
  };

  const changeField = (evt) => {
    evt.preventDefault();
    //console.log(evt.target.value);
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  } 

return (
    <div className="profil">
   
      <div className="profil-form">
        {/* picture */}
        {/*est ce que l'on propose au submit le redirect vers le rendu profil ?
          si non, il faudra supprimer ce qu il y a ci-dessous */}
          {isCompleted && (

        <div className="profil-form-completed">
        <Redirect from="/profil" to="/profilcard" />
        <p className="profil-message">

          {profilCompletedMessage}

        </p>
        </div>

        )}
        {!isCompleted && (

        <form 
          className="profil-form-element"
          autoComplete="off"        
         onSubmit={handleSubmit}
        >
        <h1 className="profil-form-title">
        À propos de vous
        </h1>
          <Field
            className="profil-form-input"
            type="text"
            name="prénom"
            placeholder="Prénom"
            onChange={changeField}
            value={firstname}
          />
          <Field
            className="profil-form-input"
            type="text"
            name="nom"
            placeholder="Nom"
            onChange={changeField}
            value={lastname}
          />

          <Field
            className="profil-form-input"
            type="text"
            name="pseudo"
            placeholder="Pseudo"
            onChange={changeField}
            value={pseudo}
          />
          <Field
            className="profil-form-input-date"
            type="date"
            name="date"
            placeholder="Date de naissance"
            autocorrect="off"
            onChange={changeField}
            value={date}
          />
          <Field
            className="profil-form-input"
            type="number"
            name="age"
            placeholder="Age"
            onChange={changeField}
            value={age}
          />

          <Field
            className="profil-form-input"
            type="email"
            name="user"
            placeholder="Adresse Email" //ou modifier son email ?
            onChange={changeField}
            value={user}
          />
          <Field
            className="profil-form-input"
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />

          <Field
            className="profil-form-input"
            type="text"
            name="adresse"
            placeholder="Adresse"
            onChange={changeField}
           value={adress}
          />
          <Field
            className="profil-form-input"
            type="text"
            name="ville"
            placeholder="Ville"
            onChange={changeField}
            value={city}
          />
          <Field
            className="profil-form-input"
            type="number"
            name="code postal"
            placeholder="Code postal"
            onChange={changeField}
            value={codeZip}
          />
          <Field
            className="profil-form-input"
            type="text"
            name="pays"
            placeholder="Pays"
            onChange={changeField}
            value={country}
          />
             <p className="profil-form-text">Ajout d'un véhicule</p>
          <Field
            className="profil-form-input"
            type="text"
            name="voiture"
            placeholder="Voiture"
            onChange={changeField}
            value={typeCar}
          />
          <Field
            className="profil-form-input"
            type="text"
            name="modele"
            placeholder="Modele"
            onChange={changeField}
            value={modelCar}
          />       
        
        <p className="profil-form-text">Choisir une ou plusieurs activités</p>
      {/*   <Field
           className="profil-form-input"
           type="select"
           multiple="oui"
           name="activity"
           placeholder="activity"
           onChange={changeField}
           value={activity_id}
           option value="kite"
           option value="skate"
          />*/}

      <div className="profil-form-sport">
          <select
            className="profil-form-select"
            name="activity_id"
            value={activity_id}
            onChange={changeField}
          >
            <option
              className="profil-form-select_title"
            >Sports pratiqués
            </option>
          {/*  {tags.map((tag) => (
              <option
                name="tag"
                key={tag.id}
                value={tag.sport}
              >
                {tag.sport}
              </option>
            ))}    */}
          </select>

         {/* checked="list" // {this.state.chkbox}
          onChange={this.handleChangeChk} */}
        
{/*
             <div className="checkbox">
         <label className="checkbox-input">
              <Field
                className="checkbox-field"
                type="checkbox"
                name="surf"
              />
              Surf
            </label>
            <label className="checkbox-input">
              <Field
                className="checkbox-field"
                type="checkbox"
                name="kite"
              />
              Kite
            </label>
          </div>
          {/* checkbox */}

          <div className="profil-form-button">
                <button 
                type="submit" 
                className="profil-form-submit"
                >
                  Sauvegarder
                </button>

                </div>
                </div>
          <div className="home-redirection">
            <p className="home-redirection-text">
                Retour sur la        
               <Link
                className="home-redirection-link"
                to="/"
               >
              page d'accueil
              </Link>
            </p>
         </div>
        </form>
       
        )}
      </div>
    </div>
);
};

ProfilUser.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleProfil: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool,
  tags: PropTypes.shape({
  sport: PropTypes.string.isRequired,
})
};
// Valeurs par défaut pour les props
ProfilUser.defaultProps = {
  isCompleted: false,
  profilCompletedMessage: 'Profil completed',
};

export default ProfilUser;
