// Import npm
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// == Import
import Loading from './Loading';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import NotFoundPage from '../NotFoundPage';
import Main from '../Main';
import Info from '../Info';
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


import './styles.scss';



const App = ({loading, fetchTravels, isLogged}) => {
  // J'exécute la fonction reçue en props
  // dès que je suis prêt, et une seule fois
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
          <HeaderTrip />
          <Trip />
          <Footer />
        </Route>

        <Route exact path="/connexion">
          <HeaderLogin />
          <Login />
          <Footer />
        </Route>

        <Route exact path="/inscription">
          <Signin />
          <Footer />
        </Route>

        <Route exact path="/profil">
          <HeaderProfilUser />
          <ProfilUser />
          <Footer />
        </Route>

        <Route exact path="/profilpage">
          <HeaderDetailsProfil />
          <DetailsProfil />
          <Footer />
        </Route>

        <Route exact path="/travel">
          <HeaderDetailsCard />
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
