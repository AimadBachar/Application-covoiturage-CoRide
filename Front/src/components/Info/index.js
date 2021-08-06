// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import Laurent from '../../assets/images/laurent.png';
import Aimad from '../../assets/images/Aimad.png';
import Anna from '../../assets/images/Anna.png';
import Julien from '../../assets/images/Julien.png';

// == Style
import '/src/components/Info/styles.scss';

// == Composant
const Info = () => (
    <div className="info-appli">
    <div className="info">
        <h1 className="info-concept">Concept Co'Ride</h1>
        <p className="info-text">
            Co'Ride est une application qui s’adresse à toute personne ayant pour passion un sport de glisse et souhaitant se rendre sur les lieux de pratique en covoiturage avec d’autres passionnés.
            <br/>
            <br/>
            L’utilisateur peut effectuer une recherche en filtrant par sport, lieu de départ, date et il pourra trouver un covoiturage avec une personne ayant la même passion.
            <br/>
            <br/>
            C’est cette spécificité communautaire qui est la particularité de notre application. Cela n’est plus un simple covoiturage, le trajet est  un moment enrichissant, de partage d’expériences, de conseils.
        </p>
        <Link className="info-contactus" to="/contact">N'hésitez pas à nous contacter pour en savoir plus</Link>
        </div>
        <div className="info-team">
            <div className="info-detail">
                <img  className="info-detail_img" src={Laurent} alt="image Laurent"/>
                <p className="info-detail_description">Laurent : Scrum Master / Lead Dev Back</p>
            </div>
            <div className="info-detail">
                <img  className="info-detail_img" src={Aimad} alt="image Aimad"/>
                <p className="info-detail_description">Aimad : Lead Dev Front</p>
            </div>
            <div className="info-detail">
                <img  className="info-detail_img" src={Anna} alt="image Anna"/>
                <p className="info-detail_description">Anna : Product Owner</p>
            </div>
            <div className="info-detail">
                <img  className="info-detail_img" src={Julien} alt="image Julien"/>
                <p className="info-detail_description">Julien : Git Master</p>
            </div>
        </div>  
    </div>
);

// == Export 
export default Info;