// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'

<<<<<<< HEAD
// == Import : local
import ModalInfo from '../../containers/ModalInfo';
import profilVide from "src/assets/images/profil_vide.jpg"
import 'src/components/DetailsProfil/styles.scss';

// == Composant
=======
import 'src/components/DetailsProfil/styles.scss';


>>>>>>> ff7f23e80b78a394d22e81b8ea341cace627aa7e
const DetailsProfil = ({
  getAllUsers,
  usersProfils,
  submitEmail
}) => {

  if(usersProfils.length ===0){
    getAllUsers();
  }

  const handleSubmitMessageForm = (event)=>{
    event.preventDefault();
    const mail = new FormData(event.target);
    submitEmail(mail);
  }


return (

    

      usersProfils.map((userprofil)=>(


<div className="profil" >

  <img className="profil-picture"src={userprofil.picture_link || profilVide}/>
 

      <div className="profil-top">
          <p>{userprofil.pseudo}</p>                          
      </div>
      
        <div className="profil-activities">
        {userprofil.activities.map((activity)=>(
        <span className="profil-tag" style={{background: activity.color }}>{activity.label}</span>
        ))}
        </div>
        <div className="profil-bottom">
        <div className="profil-contact">
       <form className="profil-form" method="post" action="" onSubmit={handleSubmitMessageForm}>
        <div>
          <input type="hidden" name="recipient" value={userprofil.pseudo}/>
          <input type="hidden" name="email" value={userprofil.email}/>
        <textarea className="profil-commentaire" rows="5" cols="28" wrap="physique" name="message">Ecrivez moi...</textarea>
        </div>
        <div>
        <input className="profil-submit" type="submit" value="M'envoyer un message" />
        </div> 
       </form>
       </div>
      </div>
</div>
      ))
 
)}



DetailsProfil.propTypes = {
  submitEmail: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  usersProfils: PropTypes.shape({
    email: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired, 
    activity: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }),
  message: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

// == Export
export default DetailsProfil;
