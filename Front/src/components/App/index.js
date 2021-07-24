// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Signin from 'src/components/ConnexionRegistration/Signin';
import Card from 'src/containers/Card';
import Main from '../Main';
import Nav from '../Nav';
import ConnexionRegistration from '../ConnexionRegistration';

import NotFoundPage from '../NotFoundPage';
import ProfilUser from '../ProfilUser';
// import Signin from '../ConnexionRegistration/Signin';

import Loading from './Loading';

import './styles.scss';
import { useEffect } from 'react';
// == Composant

const App = ({loading, fetchTravels}) => {
  // J'exécute la fonction reçue en props
  // dés que je suis prêt, et une seule fois
  useEffect(fetchTravels, [])

  if (loading) {
    console.log("oui")
    return <Loading />;
  }
  return (
    <Router>
      <div className="app">
      <Switch>

      <Route exact path="/">
          <Header />
          <Search />
          <Card />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/connexion">
          <ConnexionRegistration />
        </Route>

        <Route exact path="/inscription">
          <Signin />
        </Route>

        <Route exact path="/profil">
          <ProfilUser />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>

      </Switch>
      </div>
    </Router>
  );
};


// == Export
export default App;
