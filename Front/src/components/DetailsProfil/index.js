import React from 'react';
import PropTypes from 'prop-types';
import profilVide from "src/assets/images/profil_vide.jpg"
import { Link, useLocation } from 'react-router-dom'

import 'src/components/DetailsProfil/styles.scss';

import ModalInfo from '../../containers/ModalInfo';



const DetailsProfil = ({
  onButtonClickContact,
  getAllUsers,
  usersProfils,
  submitEmail,
  open,
  header,
  message
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

        <ModalInfo open={open} header={header} message={message}/>

  <img className="profil-picture"src={userprofil.picture_link || profilVide}/>
 

      <div className="profil-top">
          <a href="#" className="profil-pseudo" onClick={onButtonClickContact}>{userprofil.pseudo}</a>                          
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
  onButtonClickProfilUser: PropTypes.func.isRequired,
  onButtonClickValidation: PropTypes.func.isRequired,
  profil: PropTypes.shape({
    email: PropTypes.string.isRequired,
    cellular: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired, 
    bio: PropTypes.string.isRequired, 
    activity: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  })
};
export default DetailsProfil;
