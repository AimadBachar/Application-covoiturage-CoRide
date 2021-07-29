import React from 'react';
import Combobox from "react-widgets/Combobox";


import "react-widgets/scss/styles.scss";

const ComboBoxCities = ({
  resultsFetch,
  onInputCityChange,
  onInputsCoords,
  departure_city,
  long,
  lat

}) => {

  const cityFetch = (evt)=>{
    evt.preventDefault();
    console.log("evt",evt.target.value)
   
    const name = evt.target.name;
    const value = evt.target.value;

    if(value.length>4){
      onInputCityChange(name,value);
    }
  }

  const citySelected = (evt)=>{  
    
    console.log(evt);
    onInputsCoords(evt);
  }

  const fieldChange = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  } 


  return (
    
    <div>
        <Combobox 
          containerClassName="search-form_input departure"
          name="departure_city"
          placeholder="Départ"
          data={resultsFetch}
          dataKey="city"
          textField="city"
          filter="contains"
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
  );
};

export default ComboBoxCities
