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
      <div className="detailsProfil">
        <div className="profil" key={userprofil.pseudo} >
        <p className="profil-pseudo">{userprofil.pseudo}</p>
          {/* <div className="profil-top"> */}
            <img className="profil-picture"src={userprofil.picture_link || profilVide}/>                         
          {/* </div> */}
          <div className="profil-activities">
            {userprofil.activities.map((activity)=>(
              <span className="profil-tag" 
                key={activity.label} 
                style={{background: activity.color }}>{activity.label}
              </span>
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
