// Import npm
import React from 'react';
import { useEffect } from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Main from '../Main';
//import ConnexionRegistration from '../ConnexionRegistration';
import Login from 'src/containers/Login';
import Info from '../Info';
import Signin from 'src/containers/Signin';
import ProfilUser from 'src/containers/ProfilUser';
import DetailsProfil from 'src/containers/DetailsProfil';
import Trip from 'src/containers/Trip'
import Card from 'src/containers/Card';
import DetailsCard from 'src/containers/DetailsCard';
import NotFoundPage from '../NotFoundPage';
import Contact from 'src/containers/Contact';
import Loading from './Loading';

import './styles.scss';

const App = ({loading, fetchTravels, isLogged}) => {
  // J'exécute la fonction reçue en props
  // dés que je suis prêt, et une seule fois
  useEffect(fetchTravels, [])

  useEffect(()=>{
    if (localStorage.getItem('tokens')) {
      isLogged();
    }

  }, [])

  /* if (localStorage.getItem('tokens')) {
    useEffect(isLogged, [])
    
  } */

  if (loading) {
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
         {/*  <Main /> */}
          <Footer />
        </Route>

        <Route exact path="/info">
        <Header />
          <Info />
          <Footer />
        </Route>

        <Route exact path="/trip">
          <Trip />
        </Route>

        <Route exact path="/connexion">
          <Login />
        </Route>

        <Route exact path="/inscription">
          <Signin />
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
