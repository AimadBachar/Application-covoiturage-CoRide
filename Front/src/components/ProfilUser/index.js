import React from 'react';
import { Link, BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import Field from 'src/components/ProfilUser/Field';
import 'src/components/ProfilUser/styles.scss';
//import photoKite from 'src/assets/images/kitewindsurf.jpg';

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
tags,

isCompleted,
profilCompletedMessage,
changeField,
handleProfil,
handleFetchActivities,
//ajout picture
picture,

}) => {



  if(tags.length<1){
    handleFetchActivities();
  }




  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    //on récupere le password, on construit notre regexp et on check
    const password = evt.target.querySelector('input[name="password"]').value;
    const regexp = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[-+!*#$@%_])([-+!*#$@%_\\w]{8,})$");

    const checkPassword = regexp.test(password);

   /* $(document).ready(function() {
    $(".element_hide").hide();
    $('select[name=categories]').change(function() {
      var categories = $(this).val();
      if(categories=="hidden") {
        $("element_hide").show();
      }
      else{
        $(".element_hide").hide();
      }
    });
  })*/
  
     //si password non conform return
     if(!checkPassword) {
      console.log("ton mot de passe n'est pas conforme au format attendu")
      return;
    }
    handleProfil();
  };

  //on permet le téléchargement d'une photo
  const handleUpload = (evt) => {
    console.log(evt.target.files[0]);
    this.setState({ picture: evt.target.files[0] });
  };


return (
    <div className="profil">
      <div className="profil-form">
          {isCompleted && (

        <div className="profil-form-completed">
          <Redirect from="/profil" to="/profilpage" />
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
            enctype="application/x-www-form-urlencoded"
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
                  className="profil-form-input-date"
                  type="date"
                  name="birthdate"
                  placeholder="Date de naissance"
                  //autocorrect="off"
                  data-date-split-input="true"
                  onChange={changeField}
                  value={birthdate}
                />

                <Field
                  className="profil-form-input"
                  type="email"
                  name="email"
                  placeholder="Adresse Email" 
                  onChange={changeField}
                  value={email}
                />

           
{/*}
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
              */}
                <p className="profil-form-text">Quel(s) sport(s) de glisse pratiquez vous ?</p>
          
              <div className="profil-form-sport">
                <select
                  className="profil-form-input"
                  type="select"
                  name="activity_id"
                  value={activity_id}
                  onChange={changeField}
                >
                  <option
                  className="profil-form-select_title" >Sport 1</option>
                 { tags.map((tag) => (
                    <option
                      name="tag"
                      key={tag.id}
                      value={tag.id}
                    >
                      {tag.label}
                    </option>
                  ))}    
                </select>
              

              </div>                
            
              <div className="profil-form-bio">
                <p className="profil-form-text">Bio</p>
                <textarea className="profil-form-textarea" cols="20" rows="5" wrap="hard"></textarea>
              </div>
              <Field
                  className="profil-form-input"
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  onChange={changeField}
                  value={password}
                />

              <div className="profil-form-button">
                <button 
                type="submit" 
                className="profil-form-submit"
                >
                  Sauvegarder
                </button>
              </div>
       

          </form>
        )}
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
        </div>
      </div>
    );
};

ProfilUser.propTypes = {
  last_name: PropTypes.string.isRequired,
  tags: PropTypes.string,
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
