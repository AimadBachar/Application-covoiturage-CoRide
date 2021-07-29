import React from 'react';
// import PropTypes from 'prop-types';

// import iconLike from '/src/assets/images/pouce-en-l_air.png';
import './styles.scss';

const Contact = ({
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
    <div className="contact" >
        <h1 className="contact-title">Nous contacter</h1>
        <p className="contact-info">Une demande, un renseignement, veuillez remplir ce formulaire:</p>
        <form onSubmit={handleSubmit} className="contact-form">
            <textarea onChange={fieldChange} className="contact-form_input" value="" placeholder="veuillez écrire votre intérogation ici"></textarea>
            <button className="contact-form_btn">Envoyer</button>  
        </form>
    </div>
    )
};

// Card.proptypes = {

// };
export default Contact;