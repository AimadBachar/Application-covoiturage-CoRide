import React from 'react';
import { Link, BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//import Header from '../Header';
//import Footer from '../Footer';

import Field from 'src/components/ProfilUser/Field';
import 'src/components/ProfilUser/styles.scss';

const ProfilUser = ({

activity_id,
last_name,
first_name,
pseudo,
email,
password,
coords,
city,
postcode,
country,
brand,
model,
birthdate,

isCompleted,
profilCompletedMessage,
changeField,
handleProfil,
//ajout picture
picture,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    /* console.log('submit'); */
    handleProfil();
  };

  /*const changeField = (evt) => {
    evt.preventDefault();
    //console.log(evt.target.value);
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  } */

  {/*const [image, setImage] = useState({ preview: "", file: "" });
  const handleChange = (e) => {
     e.preventDefault();
     if (e.target.files.length) {
       setImage({
         preview: URL.createObjectURL(e.target.files[0]),
         file: e.target.files[0],
       });
     }
   };
   useEffect(() => {
     const formData = new FormData();
     formData.append("file", image.file);
     console.log(formData);
   }, [image]);  */}


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
            value={first_name}
          />
          <Field
            className="profil-form-input"
            type="text"
            name="nom"
            placeholder="Nom"
            onChange={changeField}
            value={last_name}
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
            value={birthdate}
          />

          <Field
            className="profil-form-input"
            type="email"
            name="user"
            placeholder="Adresse Email" //ou modifier son email ?
            onChange={changeField}
            value={email}
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
            placeholder="Adresse postale"
            onChange={changeField}
           value={coords}
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
            value={postcode}
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
            placeholder="Marque"
            onChange={changeField}
            value={brand}
          />
          <Field
            className="profil-form-input"
            type="text"
            name="model"
            placeholder="Modèle"
            onChange={changeField}
            value={model}
          />       
        
        <p className="profil-form-text">Sport de glisse pratiqué</p>
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
            type="select"
            //multiple="oui"
            name="activity_id"
            value={activity_id}
            //onChange={changeField}
          >
            <option
              className="profil-form-select_title"
            >Choisir une ou plusieurs activités
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
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  coords: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  country:  PropTypes.string.isRequired,
  activity_id: PropTypes.string.isRequired,

  changeField: PropTypes.func.isRequired,
  handleProfil: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool,
  
};
// Valeurs par défaut pour les props
ProfilUser.defaultProps = {
  isCompleted: false,
  profilCompletedMessage: 'Profil completed',
};

export default ProfilUser;
