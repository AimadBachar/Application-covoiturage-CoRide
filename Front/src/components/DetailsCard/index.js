import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useLocation } from 'react-router-dom'

import driver from '/src/assets/images/driver-orange0.png';
import pin from '/src/assets/images/pin.png';
import sit from '/src/assets/images/sit-orange0.png';

import ModalInfo from 'src/containers/ModalInfo';

import './styles.scss';


const DetailsCard = ({
  updateCard,
  logged,
  onButtonClickProfilUser,
  onButtonClickValidation,
  open,
  message,
  header
}) => {
    const location = useLocation();
    const stateLink = location.state;
    const card = stateLink.card;
    console.log("stateLink", card);

    const Onecard = localStorage.setItem("card", JSON.stringify(card))

    console.log(localStorage.getItem("card"));
    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log("participe form details-card-connected", evt.target.value);
      onButtonClickValidation(card);
    };


    if (!logged) {
      return (
      <div className="card" >
        <div className="card-top">
          <div className="card-top_left">

            <Link className="card-profil" to="/connexion">
              <p>{card.driver}</p>
            </Link>

          </div>
          <div className="card-top_right">
            <p className="card-date">{new Date(card.departure_timestamp).toLocaleDateString("fr-FR")}</p>
            <p className="card-hour">{new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(new Date(card.departure_timestamp))}</p>
          </div>
        </div>     
        <p className="card-destination">Départ: {card.departure_city}</p>      
        <p className="card-destination">Arrivée: {card.destination_city}</p>
        <p className="card-description">description: {card.description}</p>
        <div className="card-bottom">
          <span className="card-tag">{card.activity}</span>
          <span className="card-place">{card.remaining_places} place(s) restante(s)</span>

          <Link to="/connexion">

            <button className="card-button" type="button">GO !</button>
          </Link>
        </div>
      </div>
  )} else {

    return (
      <div className="card" >
        <ModalInfo open={open} header={header} message={message}/>
        <div className="card-top">
          <div className="card-top_left">
          <img src={driver} className="card-destination-driver" alt="driver" />
            <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{card.driver}</a>
          </div>
          <div className="card-top_right">
            <p className="card-date">{new Date(card.departure_timestamp).toLocaleDateString("fr-FR")}</p>
            <p className="card-hour">{new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(new Date(card.departure_timestamp))}</p>
          </div>
        </div>
        
        <div className="card-destination">
        <div className="card-destination-departure">
        <img src={pin} className="card-destination-pin" alt="pin" />
        <p className="card-destination-departure_text">{card.departure_city}</p>
        </div>
        <div className="card-destination-arrival">
        <img src={pin} className="card-destination-pin" alt="pin" />
        <p className="card-destination-arrival_text">{card.destination_city}</p>
        </div>
        </div>

        <p className="card-description">Description du trajet <br/> Place restante pour le matériel<br/>
        Point de rendez-vous<br/>  Équipement voiture: {card.description}</p>

        <div className="card-bottom">
          <span className="card-bottom-tag">#{card.activity}</span>
          <span className="card-bottom-place">{card.remaining_places}
          <img src={sit} className="card-bottom-place_sit" alt="sit" />
          </span>
          <form onSubmit={handleSubmit}>
            <input type="hidden" value={card.id}></input>
            <button className="card-button">GO !</button> 
          </form>

        </div>
      </div>


    )
  }
      
}


DetailsCard.propTypes = {
  onButtonClickProfilUser: PropTypes.func.isRequired,
  onButtonClickValidation: PropTypes.func.isRequired,
  card: PropTypes.shape({
    driver: PropTypes.string.isRequired,
    departure_timestamp: PropTypes.string.isRequired,
    departure_city: PropTypes.string.isRequired,
    destination_city: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    activity: PropTypes.string.isRequired,
    places_available: PropTypes.string.isRequired,
  })
};
export default DetailsCard;
