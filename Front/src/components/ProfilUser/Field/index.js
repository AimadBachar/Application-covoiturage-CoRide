import React from 'react';
import PropTypes from 'prop-types';

import 'src/components/ProfilUser/styles.scss';


const Field = ({
    placeholder,
    onChange,
    name,
    type,
    value,
    
}) => {
  const handleChange = (evt) => {
    evt.preventDefault();
    //const value = evt.target.value;
    onChange(evt.target.value, name);
  };
    const inputId = `field-${name}`;

    return (
   
      <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
          <input
             // React - State
             value={value}
             onChange={handleChange}
             // Les informations de base
            id={inputId}
            type={type}
            className="field-input"
            placeholder={placeholder}
            name={name}        
           />
        
          <label
          htmlFor={inputId}
          className="field-label"
           >
          {placeholder}
          </label>
      </div>   
     );
  };

  Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  type: 'date',
};

// == Export
export default Field;