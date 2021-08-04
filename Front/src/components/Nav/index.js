// == Import : npm
import React,  {useState } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";

// == Import : local
// changer le nom
import './info.scss';

// == Composant
const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  Nav.handleClickOutside = () => setIsOpen(false);
  

  if (!props.logged) {
    return (
      <div className={isOpen ? "nav -active"  : "nav"} onClick={toggle}>
        <nav role="navigation" className="nav-mobile">
          <div id="menuToggle" >
            {/* je fais en sorte que le checkbox et la même valeur que le state isOpen, ce qui va modifier le CSS par la suite */}
            <input className="nav-checkbox" type="checkbox" checked={isOpen}/>
            <span />
            <span />
            <span />
            <ul id="menu">
              <Link to="/" exact>
                <li>Accueil</li>
              </Link>
              <Link to="/contact" exact>
                <li>Contact</li>
              </Link>
              <Link to="/info" exact>
                <li>Info</li>
              </Link>
              <Link to="/connexion" exact>
              <li>Connexion</li>
              </Link>
              <Link to="/inscription" exact>
              <li>S'inscrire</li>
              </Link>
            </ul>
          </div>
        </nav>
        <nav>
            <ul className="desktop-menu">
                <Link className="items-menu" to="/" exact>
                  <li>Accueil</li>
                </Link>
                <Link className="items-menu" to="/contact" exact>
                  <li>Contact</li>
                </Link>
                <Link className="items-menu" to="/info" exact>
                  <li>Info</li>
                </Link>
                <Link className="items-menu" to="/connexion" exact>
                  <li>Connexion</li>
                </Link>
                <Link className="items-menu" to="/inscription" exact>
                  <li>S'inscrire</li>
                </Link>
            </ul>
          </nav>
      </div>
    );
  } else {
    return (
      <div className={isOpen ? "nav -active"  : "nav"} onClick={toggle}>
        <nav  role="navigation">
          <div id="menuToggle">
            <input nav-checkbox type="checkbox" checked={isOpen}/>
            <span />
            <span />
            <span />
            <ul id="menu">  
              <Link to="/" exact>
                <li>Accueil</li>
              </Link>
              <Link to="/profil" exact>
                <li>Mon profil</li>
              </Link>

              <Link to="/info" exact>
                <li>Info</li>
              </Link>

              <Link to="/profilpage" exact>
                <li>Co'Riders</li>
              </Link>

              <Link to="/contact" exact>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
        <nav>
            <ul className="desktop-menu">
                <Link className="items-menu" to="/" exact>
                  <li>Accueil</li>
                </Link>
                <Link className="items-menu" to="/contact" exact>
                  <li>Contact</li>
                </Link>
                <Link className="items-menu" to="/info" exact>
                  <li>Info</li>
                </Link>
                <Link className="items-menu" to="/connexion" exact>
                  <li>Connexion</li>
                </Link>
                <Link className="items-menu" to="/inscription" exact>
                  <li>S'inscrire</li>
                </Link>
            </ul>
          </nav>
      </div>
    ); 
  }
}

const clickOutsideConfig = {
  handleClickOutside: () => Nav.handleClickOutside
};

// == Export
export default onClickOutside(Nav, clickOutsideConfig);
