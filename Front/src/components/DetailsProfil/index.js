// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import profilVide from "src/assets/images/profil_vide.jpg";
import {Label,Input} from 'semantic-ui-react';

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

  //TODO faire la recherche dans la liste des users....
    const [searchUsers,updateUsers] = useState([]);

  const handleSubmitMessageForm = (event)=>{
    event.preventDefault();
    const mail = new FormData(event.target);
    submitEmail(mail);
  };

  

  const handleSearchChange = (event,data)=>{
    console.log(data.value);
    const search = data.value;
    const result = usersProfils.filter(user=>user.pseudo.toLowerCase().includes(search.toLowerCase()));
    updateUsers(result);

  };

  return (
    <div className="detailsProfils">
      <div className="detailsProfils__search">
        <h2>Recherche un utilisateur</h2>
      <Input className="inputSearch" icon="search" placeholder="Son pseudo..." onChange={handleSearchChange}/>
      </div>
    {(searchUsers.length ? searchUsers : usersProfils).map((userprofil)=>(
      
        
        <div className="detailsProfil" key={userprofil.pseudo} >
        <p className="detailsProfil-pseudo">{userprofil.pseudo}</p>
          {/* <div className="profil-top"> */}
            <img className="detailsProfil-picture"src={userprofil.picture_link || profilVide}/>                         
          {/* </div> */}
          <div className="detailsProfil-activities">
            {userprofil.activities.map((activity)=>(
              <Label className="tagPerso" key={activity.id} >#{activity.label}</Label>
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
    ))} 
    </div>      
  )
};

DetailsProfil.propTypes = {
  submitEmail: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  usersProfils: PropTypes.array.isRequired,
};

// == Export
export default DetailsProfil;
