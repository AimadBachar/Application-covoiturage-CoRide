// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Combobox from "react-widgets/Combobox";
import "react-widgets/scss/styles.scss";

// == Import : local
import ModalInfo from '../../containers/ModalInfo';

// == Composant
const ComboBoxCities = ({
  name,
  placeholder,
  coords,
  resultsFetch,
  onInputCityChange,
  onInputsCoords,
  long,
  lat,
  open,
  header,
  message
}) => {

  const cityFetch = (evt)=>{
    evt.preventDefault();
   
    const name = evt.target.name;
    const value = evt.target.value;
    console.log(value)
    if(value.length>4){
      onInputCityChange(name,value);
    }
  }

  const citySelected = (evt)=>{  
    
    console.log("city selected",evt);
    onInputsCoords(evt);
  }

  const fieldChange = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    
    onInputChange(evt.target.name, value )
  } 

  /**
   * this function filter the content of combobox
   * @param {Array} city 
   * @param {string} value 
   * @returns {array} an array of cities
   */
  const filterCities = (city,value)=>{

    
    const formatCity = city.city?.toLowerCase().split(" ").join("").split("-").join("").split("é").join("e").split("è").join("e");    
    const formatValue = value.toLowerCase().split(" ").join("").split("é").join("e").split("è").join("e");
  
    return formatCity?.includes(formatValue) === true;
  }

  const insertCoords = ()=>{
    if(coords ==="true"){
      return (
        <div>
        <input
          className="search-form_input long"
          type="hidden"
          name="long"
          value={long}
          onChange={fieldChange}
        />
        <input
          className="search-form_input lat"
          type="hidden"
          name="lat"
          value={lat}
          onChange={fieldChange}
        />
        </div>
      )
    }
  }

  return (
    
    <div>
      <ModalInfo open={open} header={header} message={message}/>
        <Combobox 
          containerClassName="search-form_input departure"
          name={name}
          placeholder={placeholder}
          data={resultsFetch}
          dataKey="city"
          textField="city"
          filter={filterCities}
          focusFirstItem="true"
          renderListItem={
            ({item})=>(
              <span>
               {`${item.city}${item.postcode?"-"+item.postcode:""}`}
              </span>
            )
          }
          onInput={cityFetch}
          onSelect={citySelected}
         
        /> 

        {insertCoords()}
        
        </div>
  );
};

ComboBoxCities.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  coords: PropTypes.string,
  resultsFetch: PropTypes.string,
  onInputCityChange: PropTypes.string,
  onInputsCoords: PropTypes.string,
  long: PropTypes.string,
  lat: PropTypes.string,
  //open: PropTypes.string,
  header: PropTypes.string,
  message: PropTypes.string,
};

// == Export
export default ComboBoxCities
