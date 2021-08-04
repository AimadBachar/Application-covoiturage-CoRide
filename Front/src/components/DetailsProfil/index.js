// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import ModalInfo from '../../containers/ModalInfo';
import profilVide from "src/assets/images/profil_vide.jpg"

// Style
import 'src/components/DetailsProfil/styles.scss';


// == Composant
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
      <div className="detailsProfils">
        <div className="detailsProfil" key={userprofil.pseudo} >
        <p className="detailsProfil-pseudo">{userprofil.pseudo}</p>
          {/* <div className="profil-top"> */}
            <img className="detailsProfil-picture"src={userprofil.picture_link || profilVide}/>                         
          {/* </div> */}
          <div className="detailsProfil-activities">
            {userprofil.activities.map((activity)=>(
              <span className="detailsProfil-tag" 
                key={activity.label} 
                >#{activity.label}
              </span>
            ))}
          </div>
          <div className="detailsProfil-bottom">
            <form className="detailsProfil-form" method="post" action="" onSubmit={handleSubmitMessageForm}>
              <div>
                <input type="hidden" name="recipient" value={userprofil.pseudo}/>
                <input type="hidden" name="email" value={userprofil.email}/>
                <textarea className="detailsProfil-commentaire" placeholder="Ecrivez-moi..." rows="5" cols="28" wrap="physique" name="message"></textarea>
              </div>
              <div>
                <input className="detailsProfil-submit" type="submit" value="M'envoyer un message" />
              </div> 
            </form>
          </div>
        </div>  
      </div>  
    )) 
  )
};

DetailsProfil.propTypes = {
  submitEmail: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  usersProfils: PropTypes.array.isRequired,
};

// == Export
export default DetailsProfil;
