// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import line from "src/assets/images/line1.png";
import profilVide from "src/assets/images/profil_vide.jpg"
import 'src/components/ProfilUser/styles.scss';
import { Icon } from 'semantic-ui-react';



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
  picture,
  checkInputsContent,
  onSubmitDeleteTravelPassenger,
  onSubmitDeleteTravelDriver,
  onDeleteUserActivity
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

    const select = event.target.querySelector("select");

    onSubmitActivities(select.value);
    event.target.reset();
  };

  const handleChangeFile = (event)=>{
    const avatar = URL.createObjectURL(event.target.files[0]);
    onInputChange(event.target.name,avatar);
  };

  const handleSubmitDeleteTravel = (event)=>{
    event.preventDefault();
    const travelId = event.target.querySelector('input[name="travel_id"]').value;
    onSubmitDeleteTravelPassenger(travelId);
  };

  const handleSubmitDeleteTravelDriver = (event)=>{
    event.preventDefault();
    const travelId = event.target.querySelector('input[name="travel_id"]').value;
    onSubmitDeleteTravelDriver(travelId);
  };

  const handleDeleteUserActivity = (event)=>{
      event.preventDefault();
      console.log(event.target.getAttribute("activity-id"));
      const activityId = event.target.getAttribute("activity-id");
      onDeleteUserActivity(activityId);
  }

  return (
    <div className="profil-form"> 
      <form className="profil-form-element" onSubmit={handleSubmit} enctype="application/x-www-form-urlencoded">   
       <h1 className="profil-form-title">Modifier le profil</h1> 
        <div className="profil-form-identity">
              
          
            <label id="picture-label" for="upload-file"> <img className="profil-form-identity_picture" src={picture || picture_link || profilVide}/></label>
            <input 
              className="profil-form-upload" 
              onChange={handleChangeFile}
              type="file"
              id="upload-file"
              name="picture" placeholder="Picture"
              accept="image/png, image/jpeg" /> 
                {ifPictureLink()}       
                <input type="hidden" name="id" value={id}/>

            <label for="first_name">Prénom:</label>
            <input
              className="profil-form-input" id="first_name" type="text" name="first_name"
              placeholder="Prénom" defaultValue={first_name}
              onChange={changeField} />
            
            <label for="last_name">Nom:</label>       
            <input
              className="profil-form-input" type="text" name="last_name" id="last_name"
              placeholder="Nom" defaultValue={last_name}
              onChange={changeField} />               
            
            <label for="pseudo">Pseudo:</label> 
            <input
              className="profil-form-input" type="text" name="pseudo" id="pseudo"
              placeholder="Pseudo" defaultValue={pseudo} />     

            <label for="birthdate">Date de naissance:</label>              
            <input
              className="profil-form-input" type="date" name="birthdate" id="birthdate"
              placeholder="Date de naissance" defaultValue={birthdate} />

              <label for="biography">Présentation:</label> 
              <div className="profil-form-bio">
                  <textarea className="profil-form-textarea" cols="20" rows="5" wrap="hard" id="biography"
                    placeholder="plus d'informations sur vous, vos spots préférés" name="biography">
                    {biography}
                  </textarea>  
              </div>

              <label for="last_name">E-mail:</label> 
                  <input
                    className="profil-form-input" type="email" name="email" id="email"
                    placeholder="E-mail" defaultValue={email}/>
               
               <label for="password">Votre mot de passe avant de valider:</label> 
                  <input
                    className="profil-form-input" type="password" id="password"
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
                  Choisissez votre sport passion
               </option>
                  {tags?.map((tag) => (
                <option name="tag" key={tag.id} value={JSON.stringify(tag)}>
                  {tag.label}
                </option>
                  ))}
            </select>
       </div>


      <div className="profil-form-sport_others">          
              {activities?.map(activity=>(
            <span className="profil-form-sport_input"><Icon name="delete" activity-id={activity.id} onClick={handleDeleteUserActivity}/> {activity.label}</span>
           
             ))}
     </div>                
                       
      <div className="profil-form-button">
            <button type="submit" className="profil-form-submit">
              Sauvegarder
            </button>
      </div>               
 </form>


 <div className="profil-form-element">

       <div className="profil-form-mytravelsdriver">  
        <h3>Les co'rides passager:</h3>
         
                <ul>
            
              {travels_passenger?.map(travel=>(
                <li>
                  <div className="travel">
                    <form className="button-action" onSubmit={handleSubmitDeleteTravel}>
                      <input type="hidden" name="travel_id" value={travel.id}/>
                      <button className="button-first"><img className="icone-delete" src="https://img.icons8.com/ios/48/000000/trash--v1.png"/></button>
                    </form>
                    <div class="travel-datetime">
                      <span className="travel-date">
                        {new Date(travel.departure_timestamp).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="travel-time">
                      {new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(new Date(travel.departure_timestamp))}
                      </span>
                    </div>
                    <div className="travels-city">
                      <img className="line-img" src={line}/>
                      <div className="cities">
                        <span>{travel.departure_city}</span>                      
                        <span>{travel.destination_city}</span>
                      </div>   
                    </div>
                  </div>
                </li>
              ))}
              </ul>
          </div> 

          <div className="profil-form-mytravelsdriver">  
        <h3>Les co'rides conducteur:</h3>
         
                <ul>
            
              {travels_driver?.map(travel=>(
                <li>
                  <div className="travel">
                    <form className="button-action" onSubmit={handleSubmitDeleteTravelDriver}>
                      <input type="hidden" name="travel_id" value={travel.id}/>
                      <button className="button-second"><img className="icone-delete" src="https://img.icons8.com/ios/48/000000/edit--v1.png"/></button>
                      <button className="button-third"><img className="icone-delete" src="https://img.icons8.com/ios/48/000000/trash--v1.png"/></button>
                    </form>
                    <div class="travel-datetime">
                      <span className="travel-date">
                        {new Date(travel.departure_timestamp).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="travel-time">
                      {new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(new Date(travel.departure_timestamp))}
                      </span>
                    </div>
                    <div className="travels-city">
                      <img className="line-img" src={line}/>
                      <div className="cities">
                        <span>{travel.departure_city}</span>                      
                        <span>{travel.destination_city}</span>
                      </div>   
                    </div>
                  </div>
                </li>
              ))}
              </ul>
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

