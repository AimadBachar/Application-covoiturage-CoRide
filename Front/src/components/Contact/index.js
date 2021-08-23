// == Import : npm
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

// == Import : local
import envelop from '../../assets/images/envelop.png';
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
      };

      useEffect(()=>{
        window.scrollTo(0, 0);
      });

    if (!logged) {
        return (
            <div className="contact" >
                <h1 className="undefined-contact-title">Nous contacter</h1>
                <p className="undefined-contact-info">Une demande, un renseignement,
                <br/> veuillez nous contacter par e-mail.</p>
                <a className="undefined-contact-address" href="mailto:application.coride@gmail.com">
                <img  className="undefined-contact-img" src={envelop} alt="icone-envelop"/>
               </a>
            </div>
            )
    }  else {
        return (
        <div className="contact" >
          <h1 className="contact-title">Nous contacter</h1>
          <p className="contact-info">Une demande, un renseignement, veuillez remplir ce formulaire:</p>
          <div className="contact-bottom">
            <form className="contact-bottom_form" method="post" action="" onSubmit={handleSubmitMessageForm}>
              <div>
                <input type="hidden" name="recipient" value="Admin"/>
                <input type="hidden" name="email" value="application.coride@gmail.com"/>
                <textarea className="contact-bottom_form__commentaire" rows="5" cols="28" wrap="physique" name="message" 
                placeholder="Ecrivez-nous ici..."></textarea>
              </div>
              <div>
                <input className="contact-bottom_form__submit" type="submit" value="Envoyer" />
              </div> 
            </form>
          </div>
        </div>
      )
    }; 
};

Contact.propTypes = {
    submitEmail: PropTypes.func.isRequired,
    header: PropTypes.string,
    logged: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
  };
  
// Valeurs par défaut pour les props
Contact.defaultProps = {
   logged: false,
  };
  
// == Export
export default Contact;