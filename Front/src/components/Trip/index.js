// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import ComboBoxCities from '../../containers/ComboBoxCities';

import './styles.scss';


// == Composant
const Trip = ({
  places_available,
  description,
  onInputChange,
  onSubmitTrip,
  tags,
  longitude_departure,
  latitude_departure,
  activity_id,
  departure_timestamp,
  handleFetchActivities,
  checkInputsContent
}) => {


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');


    if(evt.target.querySelector('input[name="departure_city"]').value ===""){
      return checkInputsContent({
        header:"Attention",
        message:"Vous devez choisir une ville de départ!"
      })
    };

    if(evt.target.querySelector('input[name="destination_city"]').value ===""){
        return checkInputsContent({
          header:"Attention",
          message:"Vous devez choisir une ville d'arrivée!"
        })
    };

    if(evt.target.querySelector('select[name="activity_id"]').value ===""){
      return checkInputsContent({
        header:"Attention",
        message:"Vous devez choisir une activitée!"
      })
  };

  
  if(evt.target.querySelector('input[name="departure_timestamp"]').value ===""){
    return checkInputsContent({
      header:"Attention",
      message:"Vous devez choisir une date et une heure de départ!"
    })
  };

  if(new Date(evt.target.querySelector('input[name="departure_timestamp"]').value) <= Date.now()){
    return checkInputsContent({
      header:"Attention",
      message:`Vous ne pouvez pas choisir une date anterieur au ${(new Date()).toLocaleDateString("fr-FR")}!`
    })
  };

  if(evt.target.querySelector('input[name="places_available"]').value <= 0){
    return checkInputsContent({
      header:"Attention",
      message:"Vous devez choisir un nombre de place disponible..."
    })
  };

  if(evt.target.querySelector('input[name="description"]').value ===""){
    return checkInputsContent({
      header:"Attention",
      message:"Vous devez écrire une description de votre offre de covoiturage..."
    })
  };


    onSubmitTrip();
    evt.target.reset();
  };

  const fieldChange = (evt) => {
    evt.preventDefault();
    console.log("on change",evt.target.value);
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  } 
  
  {
    //TODO importer combobox et faire champ de recherche
    console.log("Trip component")
  }

{
  console.log(tags)
  if(tags.length<1){
    handleFetchActivities();
  }
}

  
  return (
    <div className="trip">

      <form
 
        className="trip-form"
        onSubmit={handleSubmit}
      >
        <h1 className="trip-form_title">Proposer votre trajet </h1>
        <ComboBoxCities  placeholder="Départ" name="departure_city" />
        <ComboBoxCities placeholder="Destination" name="destination_city" />
        <input
          className="trip-form_input depart"
          type="hidden"
          name="latitute_departure"
          value={latitude_departure}
          onChange={fieldChange}
        />

        <input
          className="trip-form_input depart"
          type="hidden"
          name="longitude_departure"
          value={longitude_departure}
          onChange={fieldChange}
        />
        <div className="trip-form_sport__date">
          <select
            className="trip-form_select"
            name="activity_id"
            value={activity_id}
            onChange={fieldChange}
          >
            <option
              className="trip-form_select_title"
              value=""
            >Quel sport ?
            </option>
            {tags.map((tag) => (
              <option
                name="tag"
                key={tag.id}
                value={tag.id}
              >
                {tag.label}
              </option>
            ))}
          </select>
          <input
            className="trip-form_date"
            type="datetime-local"
            name="departure_timestamp"
            value={departure_timestamp}
            placeholder="aujourd'hui"
            onChange={fieldChange}
          />
        </div>

        <input
            className="trip-form_input"
            type="number"
            name="places_available"
            value={places_available}
            placeholder="Nombre de place"
            onChange={fieldChange}
          />

          <input
            className="trip-form_input"
            type="textarea"
            name="description"
            value={description}
            placeholder="Spécificité du véhicule, informations sur le trajet"
            onChange={fieldChange}
          />

        <button
          type="submit"
          className="trip-form_submit"
        >
          Valider le trajet ?
        </button>
      </form>
    </div>
  );
};


 Trip.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  description: PropTypes.string,
  places_available: PropTypes.number.isRequired
  /*
  tags,
  longitude_departure,
  latitude_departure,
  activity_id,
  departure_timestamp,
  handleFetchActivities,
  open,
  header,
  message,
  checkInputsContent
  */
};

// == Export
export default Trip;
