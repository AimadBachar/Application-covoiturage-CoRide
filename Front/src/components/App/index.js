// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// == Import : local
import Loading from './Loading';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import NotFoundPage from '../NotFoundPage';
import Info from '../Info';
import Mentions from '../Mentions';
import HeaderContact from 'src/containers/HeaderContact';
import HeaderInfo from 'src/containers/HeaderInfo';
import Contact from 'src/containers/Contact';
import Login from 'src/containers/Login';
import HeaderLogin from 'src/containers/HeaderLogin';
import Signin from 'src/containers/Signin';
import ProfilUser from 'src/containers/ProfilUser';
import HeaderProfilUser from 'src/containers/HeaderProfilUser';
import DetailsProfil from 'src/containers/DetailsProfil';
import HeaderDetailsProfil from 'src/containers/HeaderDetailsProfil';
import Trip from 'src/containers/Trip'
import HeaderTrip from 'src/containers/HeaderTrip';
import Card from 'src/containers/Card';
import DetailsCard from 'src/containers/DetailsCard';
import HeaderDetailsCard from 'src/containers/HeaderDetailsCard';
import ModalInfo from 'src/containers/ModalInfo';
import './styles.scss';


// == Composant
const App = ({
  loading, 
  fetchTravels, 
  isLogged, 
  open, 
  header,
  message, 
  logged
}) => {
  // J'exécute la fonction reçue en props
  // dès que je suis prêt, et une seule fois
  useEffect(fetchTravels, [])

  useEffect(()=>{
    if (localStorage.getItem('tokens')) {
      isLogged();
    
    }
  }, [])

 if (logged) {
  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <div className="app">
      <ModalInfo open={open} header={header} message={message}/>  
      <Switch>

      <Route exact path="/">
          <Header />
          <Search />
          <Card />
          <Footer />
        </Route>

        <Route exact path="/info">
          <Header />
          <Info />
          <Footer />
        </Route>

        <Route exact path="/trip">
          <Header />
          <Trip />
          <Footer />
        </Route>

        <Route exact path="/connexion">
          <Header />
          <Login />
          <Footer />
        </Route>

        <Route exact path="/inscription">
          <Signin />
          <Footer />
        </Route>

        <Route exact path="/profil">
          <Header />
          <ProfilUser />
          <Footer />
        </Route>

        <Route exact path="/profilpage">
          <Header />
          <DetailsProfil />
          <Footer />
        </Route>

        <Route exact path="/travel">
          <Header />
          <DetailsCard />
          <Footer />
        </Route>

        <Route exact path="/contact">
          <Header />
          <Contact />
          <Footer />
        </Route>

        <Route exact path="/mentions">
          <Header />
          <Mentions />
          <Footer />
        </Route>

        <Route path="*">
          <Header/>
          <NotFoundPage />
          <Footer/>
        </Route>

      </Switch>
      </div>
    </Router>
  );
 } else {
  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <div className="app">
      <ModalInfo open={open} header={header} message={message}/>  
      <Switch>

      <Route exact path="/">
          <Header />
          <Search />
          <Card />
          <Footer />
        </Route>

        <Route exact path="/info">
          <Header />
          <Info />
          <Footer />
        </Route>

        <Route exact path="/trip">
          <Redirect from="/trip" to="/connexion" />
          <Header />
          <Trip />
          <Footer />
        </Route>

        <Route exact path="/connexion">
          <Header />
          <Login />
          <Footer />
        </Route>

        <Route exact path="/inscription">
          <Signin />
          <Footer />
        </Route>

        <Route exact path="/profil">
          <Redirect from="/profil" to="/connexion" />
          <Header />
          <ProfilUser />
          <Footer />
        </Route>

        <Route exact path="/profilpage">
          <Redirect from="/profilpage" to="/connexion" />
          <Header />
          <DetailsProfil />
          <Footer />
        </Route>

        <Route exact path="/travel">
          <Header />
          <DetailsCard />
          <Footer />
        </Route>

        <Route exact path="/contact">
          <Header />
          <Contact />
          <Footer />
        </Route>

        <Route exact path="/mentions">
          <Header />
          <Mentions />
          <Footer />
        </Route>

        <Route path="*">
          <Header/>
          <NotFoundPage />
          <Footer/>
        </Route>

      </Switch>
      </div>
    </Router>
  );

 }
};


App.propTypes = {
  loading: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  fetchTravels: PropTypes.func.isRequired,
  isLogged: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired, 
};

// Valeurs par défaut pour les props
App.defaultProps = {
  logged: false,
};

// == Export
export default App;