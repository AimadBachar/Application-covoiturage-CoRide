import React from 'react';
import PropTypes from 'prop-types';
import loupe from '/src/assets/images/loupe white 2.png';


import './styles.scss';
import { Redirect } from 'react-router-dom';

const Search = ({
  cards,
  tags,
  departure_city,
  destination_city,
  activity_id,
  departure_timestamp,
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
  {console.log(cards)}
  const cardsOk = () => {
    if (cards.length > 0) {
      return (
        <Redirect to={{
          pathname: "/results",
        }}/>
      )
    }
  }

  return (
    
    <div className="search">
      {
        cardsOk()    
      }


      <form
        //action="/results"

        className="search-form"
        onSubmit={handleSubmit}
      >

        <input
          className="search-form_input depart"
          type="text"
          name="departure_city"
          placeholder="Départ"
          value={departure_city}
          onChange={fieldChange}
        />

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
            value={activity_id}
            onChange={fieldChange}
          >
            <option
              className="search-form_select_title"
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
  );
};


Search.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  tags: PropTypes.shape({
   sport: PropTypes.string.isRequired,
  })
}

export default Search;
