// Import npm
import React, { useEffect } from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Signin from 'src/components/ConnexionRegistration/Signin';
import Card from 'src/containers/Card';
import Main from '../Main';
import ConnexionRegistration from '../ConnexionRegistration';
import Nav from '../Nav';

import NotFoundPage from '../NotFoundPage';

import ProfilUser from '../ProfilUser';

// import Loading from '../Loading';

import './styles.scss';
// == Composant
const App = () => (
// J'exécute la fonction reçue en props
// dés que je suis prêt, et une seule fois
// useEffect(fetchTravels, [])

  // if (loading) {
  //  return <Loading />;
  // }

  <Router>
    <Switch>

      <Route exact path="/results">
        <Card />
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

      <div className="app">

        <Header />

        <Nav />

        <Search />

        <Main />

        <Footer />

      </div>

      <Route path="*">
        <NotFoundPage />
      </Route>

    </Switch>
  </Router>
);

// == Export
export default App;
