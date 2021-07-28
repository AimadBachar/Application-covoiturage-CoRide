import React from 'react';
import PropTypes from 'prop-types';
import loupe from '/src/assets/images/loupe white 2.png';
import ComboBoxCities from '../../containers/ComboBoxCities';


import './styles.scss';
import "react-widgets/scss/styles.scss";
import { Redirect, Link } from 'react-router-dom';

const Search = ({
  tags,
  destination_city,
  activity,
  departure_timestamp,
  departure_city,
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
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  } 

  return (
    <div>
    <div className="search">
      
      <form
        className="search-form"
        onSubmit={handleSubmit}
      >

        <ComboBoxCities onChange={fieldChange}/>


        <input
          className="search-form_input destination"
          type="text"
          name="destination_city"
          placeholder="Destination"
          value={destination_city}
          onChange={fieldChange}
        />
        <div className="search-form_sport__date">
          <select
            className="search-form_select"
            name="activity_id"
            value={activity}
            onChange={fieldChange}
          >
            <option
              className="search-form_select_title"
              value=""
            >Quel sport ?
            </option>
            {tags.map((tag) => (
              <option
                key={tag.id}
                value={tag.id}
              >
                {tag.label}
              </option>
            ))}
          </select>
          <input
            className="search-form_date"
            type="date"
            name="departure_timestamp"
            value={departure_timestamp}
            placeholder="aujourd'hui"
            onChange={fieldChange}
          />
        </div> 
        <button
          type="submit"
          className="search-form_submit"
        >

      
          <img className="loupe" src={loupe} alt="loupe" />
        </button>
      </form>
    </div>

    <Link
      to="/trip"
      className="search-trip"
    >
      <p className="search-trip_text">
        Ajouter un trajet
      </p>
    </Link>
  </div>
  );
};


Search.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onInputCityChange: PropTypes.func.isRequired,
  tags: PropTypes.shape({
   sport: PropTypes.string.isRequired,
  })
};

export default Search;
