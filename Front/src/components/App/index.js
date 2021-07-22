// Import npm
import React, {useEffect} from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Main from '../Main';
import ConnexionRegistration from '../ConnexionRegistration';

import Signin from 'src/components/ConnexionRegistration/Signin';

import Card from 'src/containers/Card';
import NotFoundPage from '../NotFoundPage';

import ProfilUser from '../ProfilUser';

//import Loading from '../Loading';



//Fake Data
//import dataCards from "../../data/data_sport";

import './styles.scss';
// == Composant
const App = ({fetchTravels}) => {

  // J'exécute la fonction reçue en props
  // dés que je suis prêt, et une seule fois
  //useEffect(fetchTravels, [])

  //if (loading) {
  //  return <Loading />;
  //}
  return (
    <Router>
      <Switch>
        <Route exact path="/connexion">
          <ConnexionRegistration /> 
        </Route>
        <Route exact path="/results">
          <Header />
          <Search />
          <Card />
          <Footer />
        </Route>
      
        
        <div className="app">
      
          <Header />


        <Route exact path="/connexion">
          <ConnexionRegistration />
        </Route>
        
        <Route exact path="/inscription">
          <Signin />
        </Route>

          <Search />

          <Main />


        <Route exact path="/profil">
          <ProfilUser />
        </Route>

        <Route path="*">


          <Footer />
        </div>
    <Route path="*">

          <NotFoundPage />
    </Route>
      </Switch>
    </Router>
  );

}

// == Export
export default App;


