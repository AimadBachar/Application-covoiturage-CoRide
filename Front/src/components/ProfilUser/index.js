// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import ModalInfo from "src/containers/ModalInfo";
import profilVide from "src/assets/images/profil_vide.jpg"
import 'src/components/ProfilUser/styles.scss';



// == Composant
const ProfilUser = ({
  last_name,
  first_name,
  pseudo,
  email,
  birthdate,
  tags,
  id,
  onInputChange,
  onSubmitProfil,
  handleFetchActivities,
  picture_link,
  activities,
  onSubmitActivities,
  travels_passenger,
  travels_driver,
  biography,
  checkInputsContent
}) => {
  if(tags?.length<1){
    handleFetchActivities();
  }
  const handleSubmit = (evt) => {   
    evt.preventDefault();
    const inputs = evt.target.querySelectorAll("input");
    const checkInputs = Array.from(inputs).find(input=>input.value === "" && input.type != "file");
    if(checkInputs) return checkInputsContent({
      header:"Attention",
      message:"Tous les champs doivent être saisis"
    })

    console.log('submit');

    const updateUser = new FormData(evt.target)
    onSubmitProfil(updateUser);
    evt.target.reset();
  };

  const changeField = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  };

  const ifPictureLink = ()=>{
    if(picture_link){
      return (
        <input type="hidden" name="picture_link" value={picture_link}/>
      )
    }
  };

  const handleSubmitActivities =(event)=>{
    event.preventDefault();
    console.log("handle submit activities");
    onSubmitActivities();
    event.target.reset();
  };

  return (
    <div className="profil-form"> 
      <form className="profil-form-element" onSubmit={handleSubmit} enctype="application/x-www-form-urlencoded">   
       <h1 className="profil-form-title">Modifier le profil</h1> 
        <div className="profil-form-identity">
          <img className="profil-form-identity_picture" src={picture_link || profilVide}/>      
            <input 
              className="profil-form-upload" 
              type="file"
              name="picture" placeholder="Picture"
              accept="image/png, image/jpeg" /> 
                {ifPictureLink()}       
                <input type="hidden" name="id" value={id}/>

            <input
              className="profil-form-input" type="text" name="first_name"
              placeholder="Prénom" defaultValue={first_name}
              onChange={changeField} />
                   
            <input
              className="profil-form-input" type="text" name="last_name"
              placeholder="Nom" defaultValue={last_name}
              onChange={changeField} />               
            
            <input
              className="profil-form-input" type="text" name="pseudo"
              placeholder="Pseudo" defaultValue={pseudo} />     
                          
            <input
              className="profil-form-input" type="date" name="birthdate"
              placeholder="Date de naissance" defaultValue={birthdate} />

              <div className="profil-form-bio">
                  <textarea className="profil-form-textarea" cols="20" rows="5" wrap="hard" 
                    placeholder="plus d'informations sur vous, vos spots préférés" name="biography">
                    {biography}
                  </textarea>  
              </div>

                  <input
                    className="profil-form-input" type="email" name="email"
                    placeholder="E-mail" defaultValue={email}/>
               
                  <input
                    className="profil-form-input" type="password"
                    name="password" placeholder="Mot de passe"/>
               </div>
              <div className="profil-form-button">
                <button type="submit" className="profil-form-submit">
                   Sauvegarder
                </button>
          </div>
      </form>
       
          
  <form className="profil-form-element"       
        onSubmit={handleSubmitActivities}
        enctype="application/x-www-form-urlencoded">
       
       <div className="profil-form-sport">     
            <select className="profil-form-sport_select" type="select" name="activity_id" 
                    onChange={changeField}>
               <option
                  className="profil-form-sport_title" value="">
                  Choisissez votre sport passion n°1
               </option>
                  {tags?.map((tag) => (
                <option name="tag" key={tag.id} value={tag.id}>
                  {tag.label}
                </option>
                  ))}
            </select>
       </div>


      <div className="profil-form-sport_others">          
              {activities?.map(activity=>(
            <span className="profil-form-sport_input">{activity.label}</span>   
           
             ))}
     </div>                
                       
      <div className="profil-form-button">
            <button type="submit" className="profil-form-submit">
              Sauvegarder
            </button>
      </div>               
 </form>


 <div className="profil-form-element">
 <div className="profil-form-mytravelspassenger">   
         <table>
           <thead>
        <tr>
              <th>Ville de départ</th>           
              <th>Ville d'arrivée</th>           
              <th>date et heure de départ</th>
        </tr>
        </thead>
             <tbody>
               {travels_passenger?.map(travel=>(
           
              <tr>
                <td>{travel.departure_city}</td>                  
                <td>{travel.destination_city}</td>
                <td>{new Date(travel.departure_timestamp).toLocaleString('fr-FR')}</td>
              </tr> 
                                          
         ))}
            </tbody>
         </table>
       </div>    

       <div className="profil-form-mytravelsdriver">   
         <table>
           <thead>
            <tr>
                <th>Ville de départ</th>                        
                <th>Ville d'arrivée</th>                        
                <th>date et heure de départ</th>
              </tr>
            </thead>

            <tbody>
              {travels_passenger?.map(travel=>(
                <tr>
                  <td>{travel.departure_city}</td>                  
                  <td>{travel.destination_city}</td>
                  <td>{new Date(travel.departure_timestamp).toLocaleString('fr-FR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>    

        <div className="profil-form-mytravelsdriver">   
          <table>
            <thead>
              <tr>
                <th>Départ</th>                        
                <th>Arrivée</th>                        
                <th>date et heure</th>
              </tr>
            </thead>

            <tbody>
              {travels_driver?.map(travel=>(
                <tr>
                  <td>{travel.departure_city}</td>                 
                  <td>{travel.destination_city}</td>                  
                  <td>{new Date(travel.departure_timestamp).toLocaleString('fr-FR')}</td>
                </tr>                          
              ))}
            </tbody>
          </table>
        </div>                    
      </div>

      <div className="profil-form-button">
        <button type="submit" className="profil-form-submit">
          Supprimer le profil
        </button>
      </div>

      <div className="home-redirection">
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
  tags: PropTypes.shape({
    sport: PropTypes.string.isRequired,
   }) 
};

// == Export
export default ProfilUser;

