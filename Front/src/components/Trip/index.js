import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';


import './styles.scss';
import { Redirect } from 'react-router-dom';

const Trip = ({
  cards,
  tags,
  departure_city,
  destination_city,
  activity_id,
  departure_timestamp,
  places_available,
  description,
  onInputChange,
  onSubmitSearch
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
    onSubmitSearch();

  };

  const fieldChange = (evt) => {
    evt.preventDefault();
    //console.log(evt.target.value);
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  } 
  
  {console.log("Trip component")}

  
  return (
    <div className="trip">
      <Header />

      <form
 
        className="trip-form"
        onSubmit={handleSubmit}
      >
        <h1 className="trip-form_title">Proposer votre trajet </h1>
        <input
          className="trip-form_input depart"
          type="text"
          name="departure_city"
          placeholder="Départ"
          value={departure_city}
          onChange={fieldChange}
        />

        <input
          className="trip-form_input destination"
          type="text"
          name="destination_city"
          placeholder="Destination"
          value={destination_city}
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
            >Quel sport ?
            </option>
            {tags.map((tag) => (
              <option
                name="tag"
                key={tag.id}
                value={tag.sport}
              >
                {tag.sport}
              </option>
            ))}
          </select>
          <input
            className="trip-form_date"
            type="date"
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
      <Footer />
    </div>
  );
};


 Trip.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  description: PropTypes.string,
  places_available: PropTypes.number.isRequired,
  tags: PropTypes.shape({
    sport: PropTypes.string.isRequired,
  })
};

export default Trip;
