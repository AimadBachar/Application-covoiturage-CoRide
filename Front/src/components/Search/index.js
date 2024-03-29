// == Import : npm
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "react-widgets/scss/styles.scss";

// == Import : local
import ComboBoxCities from '../../containers/ComboBoxCities';
import loupe from '/src/assets/images/loupe white 2.png';
import './styles.scss';

// == Composant
const Search = ({
  tags,
  activity,
  departure_timestamp,
  onInputChange,
  onSubmitSearch
}) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit',evt.target);
    onSubmitSearch();
    evt.target.reset();
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
          <h1 className="search-form_title">
            Trouver un trajet
          </h1>
          <ComboBoxCities  placeholder="Départ" name="departure_city" className="depart" />
          <ComboBoxCities placeholder="Arrivé" name="destination_city" />
      
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
              > 
                Sport
              </option>

              {tags.length>0 ? tags.map((tag) => (
                <option
                  key={tag.id}
                  value={tag.id}
                >
                  {tag.label}
                </option>
              )) : null}
            </select>
            <input
              className="search-form_date"
              type="date"
              name="departure_timestamp"
              value={departure_timestamp}
              placeholder="Aujourd'hui"
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
        <h2 className="search-trip_title">Publier un trajet</h2>
        <p className="search-trip_text">
          Partage ta passion pour une activité en proposant les places libres dans ton véhicule à la communauté Co'Ride!
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

// == Export
export default Search;
