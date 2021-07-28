import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'

import 'src/components/DetailsProfil/styles.scss';



const DetailsProfil = ({
  onButtonClickContact,
}) => {
    /*
    const query = new URLSearchParams(useLocation().search);

    const id = query.get("id");    
    
    const profils = JSON.parse(localStorage.getItem("users"));
    
    const userprofil = profils.find(user=>user.id == id);
    */

return (
    <div className="profil" >
      <div className="profil-top">
        <div className="profil-top_left">
          <a href="#" className="card-profil" onClick={onButtonClickContact}>{userprofil.pseudo}</a>
          <p className="profil-picture">{userprofil.picture}</p>
          <p>PROFIL UTILISATEUR</p>
        </div>
        <div className="profil-top_right">
          <p className="profil-email">{userprofil.email}</p>
          <p className="profil-cellular">{userprofil.cellular}</p>        
        </div>
      </div>
      <p className="profil-localisation">localisation: {userprofil.city}</p>
      <p className="profil-localisation">localisation: {userprofil.country}</p>
      <p className="profil-bio">Bio de l'utilisateur Bio de l'utilisateur Bio de l'utilisateur: {card.bio}</p>
      <div className="profil-bottom">
        <span className="profil-tag">{userprofil.activity}</span>
       <span className="profil-véhicule">{userprofil.brand} {userprofil.rmodel}</span>
       <form method="post" action="mailto:votreemail@email.com">

        <textarea rows="5" cols="20" wrap="physique" name="commentaires">Ecrivez un commentaire</textarea><br />
        <input type="submit" value="M'envoyer un Email" />  
       </form>
       
        <button className="profil-button" type="button" onClick={onButtonClickContact}>Contactez moi!</button>
      </div>
    </div>
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
