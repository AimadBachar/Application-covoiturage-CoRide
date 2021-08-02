// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

// == Composant
const Contact = ({
    submitEmail,
    logged,
    email,
    pseudo
}) => {
    const handleSubmitMessageForm = (event)=>{
        event.preventDefault();
        const mail = new FormData(event.target);
        submitEmail(mail);
      }

     if (!logged) {
        return (
            <div className="contact" >
                <h1 className="contact-title">Nous contacter</h1>
                <p className="contact-info">Une demande, un renseignement, veuillez nous écire à cet email:</p>
                <a className="contact-title" href="mailto:application.coride@gmail.com">application.coride@gmail.com</a>
            </div>
            )
    }  else {
        return (
    <div className="contact" >
        <h1 className="contact-title">Nous contacter</h1>
            <p className="contact-info">Une demande, un renseignement, veuillez remplir ce formulaire:</p>
        <div className="profil-bottom">
            <div className="profil-contact">
                <form className="profil-form" method="post" action="" onSubmit={handleSubmitMessageForm}>
                        <div>
                        <input type="hidden" name="recipient" value="Admin"/>
                        <input type="hidden" name="email" value="application.coride@gmail.com"/>
                        <textarea className="profil-commentaire" rows="5" cols="28" wrap="physique" name="message" placeholder="Posez votre question ici..."></textarea>
                        </div>
                        <div>
                        <input className="profil-submit" type="submit" value="Envoyer" />
                        </div> 
                </form>
        </div>
      </div>
    </div>
      
      )

    }; 
};

Contact.propTypes = {
    submitEmail: PropTypes.string,
    header: PropTypes.string,
    logged: PropTypes.bool,
    message: PropTypes.string,
  };
  
  // Valeurs par défaut pour les props
  Contact.defaultProps = {
    logged: false,
  };
  
  // == Export
export default Contact;