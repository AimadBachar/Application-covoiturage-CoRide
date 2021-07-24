import React from 'react';
import { Link, BrowserRouter, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import Field from 'src/components/ProfilUser/Field';
import './styles.scss';

const ProfilUser = ({

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
changeField,
handleProfil,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleProfil();
  };



return (
  <div>
    <Header />
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
            value={lastname}
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

          <div className="checkbox">
            <p className="checkbox-text">Choisi une ou plusieurs activités:</p>
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
          <div className="profil-button">
                <button 
                type="submit" 
                className="profil-form-submit"
                >
                  Sauvegarder
                </button>

                <button type="submit" 
                className="profil-form-submit">
                  Annuler
                </button>
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
    <Footer />
  </div>
);
};

// Footer.proptypes = {

// };

export default ProfilUser;
