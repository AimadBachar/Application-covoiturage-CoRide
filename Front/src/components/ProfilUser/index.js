import React from 'react';
import { Link, BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import profilVide from "src/assets/images/profil_vide.jpg"
import 'src/components/ProfilUser/styles.scss';


const ProfilUser = ({
activity,
last_name,
first_name,
pseudo,
email,
password,
birthdate,
tags,
id,
onInputChange,
onSubmitProfil,
handleFetchActivities,
picture_link,


usersprofil,

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
     //si password non conform return
     if(!checkPassword) {
     console.log("ton mot de passe n'est pas conforme au format attendu")
      return;
    }
    console.log('submit');

    const updateUser = new FormData(evt.target)

    onSubmitProfil(updateUser);
  };

  const changeField = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  };

 /* //on permet le téléchargement d'une photo
  const handleUpload = (evt) => {
    console.log(evt.target.files[0]);
    this.setState({ picture: evt.target.files[0] });
  };*/

  const ifPictureLink = ()=>{
    if(picture_link){
      return (
        <input type="hidden" name="picture_link" value={picture_link}/>
      )
    }
  };


return (

  
    <div className="profil-form">
      <h1 className="profil-form-title">Modifier le profil</h1>
            
      <form // FORM 1 HEADER
            className="profil-form-element"       
            onSubmit={handleSubmit}
            enctype="application/x-www-form-urlencoded">
          
       <div className="profil-form-header">
          <div className="profil-form-upper">
              <img className="profil-form-upper_picture" src={picture_link || profilVide}/>
            
                <input
                  className="profil-form-upload" type="file"
                  name="picture" placeholder="Picture"
                  accept="image/png, image/jpeg"/> 

                     {ifPictureLink()}
                     </div>

            <div className="profil-form-identity">
                <div className="profil-form-identity_firstname">
                    <input type="hidden" name="id" value={id}/>
                    <input
                      className="profil-form-identity_input" type="text" name="first_name"
                      placeholder="Prénom" defaultValue={first_name}
                      onChange={changeField} />
                </div>

                <div className="profil-form-identity_lastname">
                    <input
                      className="profil-form-identity_input" type="text" name="last_name"
                      placeholder="Nom" defaultValue={last_name}
                      onChange={changeField} />               
                </div>
            </div>
        </div>


              <div className="profil-form-pseudobirthdate">
                <input
                  className="profil-form-pseudo" type="text" name="pseudo"
                  placeholder="Pseudo" defaultValue={pseudo} />             
                <input
                  className="profil-form-date" type="date" name="birthdate"
                  placeholder="Date de naissance" defaultValue={birthdate} />
              </div>

              <div // ESPACE BIO
                  className="profil-form-bio">
                  <textarea className="profil-form-textarea" cols="20" rows="5" wrap="hard" 
                    placeholder="plus d'informations sur vous, vos spots préférés">
                  </textarea>  
              </div>

            <div className="profil-form-emailpassword">
              <div className="profil-form-emailpassword_email">
                <input
                    className="profil-form-emailpassword_input" type="email" name="email"
                    placeholder="E-mail" defaultValue={email}/>
                    </div>
              <div className="profil-form-emailpassword_password">
                <input
                  className="profil-form-emailpasssword_input" type="password"
                  name="password" placeholder="Mot de passe"/>
                </div>
              </div>
            <div className="profil-form-button">
                <button type="submit" className="profil-form-submit">
                       Sauvegarder
                </button>
           </div>
      </form>
              

      <form // FORM 2  CHOIX DES SPORTS + BOUTON
        className="profil-form-element"       
            onSubmit={handleSubmit}
            enctype="application/x-www-form-urlencoded">
           
           <div className="profil-form-sport">     
                <select className="profil-form-sport_select" type="select" name="activity_id" 
                       defaultValue={activity} onChange={changeField}>
                   <option
                      className="profil-form-sport_title" value="">
                      Choisissez votre sport passion n°1
                   </option>
                      {tags.map((tag) => (
                    <option name="tag" key={tag.id} value={tag.id}>
                      {tag.label}
                    </option>
                      ))}
                </select>
           </div>


          
          <div // RECUPERER LES TAGS DES SPORTS
              className="profil-form-sport_others">   
             
                <input type="text" className="profil-form-sport_input" placeholder="Sport passion n°2"></input>    
               <input type="text" className="profil-form-sport_input" placeholder="Sport passion n°3"></input>
           
               </div>                
                           
          <div className="profil-form-button">
                <button type="submit" className="profil-form-submit">
                        Sauvegarder
                </button>
          </div>               
     </form>


              <div // REDIRECTION VERS LA PAGE D'ACCUEIL
               className="home-redirection">
                <p className="home-redirection-text">
                   Retour sur la        
                  <Link
                    className="home-redirection-link" to="/">
                   page d'accueil
                  </Link>
                </p>
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
  activity: PropTypes.string.isRequired,
  onSubmitProfil: PropTypes.func.isRequired,
  //onChange: PropTypes.func.isRequired,
  tags: PropTypes.shape({
    sport: PropTypes.string.isRequired,
   }) 
};

export default ProfilUser;



// autres champs  pour le profil de l'utilisateur
/*}
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
              */

                /*
                 <p className="profil-form-text">Bio</p>
                 */


                 /*


                <p className="profil-form-text">Quel(s) sport(s) de glisse pratiquez vous ?</p>
          */


                /*
                  
                */