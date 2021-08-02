// Import npm
import React from 'react';
import { useEffect } from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import HeaderContact from 'src/containers/HeaderContact';
import HeaderDetailsCard from 'src/containers/HeaderDetailsCard';
import HeaderInfo from 'src/containers/HeaderInfo';
import HeaderLogin from 'src/containers/HeaderLogin';
import HeaderProfilUser from 'src/containers/HeaderProfilUser';
import HeaderTrip from 'src/containers/HeaderTrip';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Main from '../Main';
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
import Login from 'src/containers/Login';
import ModalInfo from 'src/containers/ModalInfo';




import './styles.scss';



const App = ({loading, fetchTravels, isLogged, header, message, logged}) => {

  // J'exécute la fonction reçue en props
  // dés que je suis prêt, et une seule fois
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
          <HeaderInfo />
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
          <HeaderContact />
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
 } else {
  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <div className="app">
        <ModalInfo header={header} message={message}/>
      <Switch>

      <Route exact path="/">
          <Header />
          <Search />
          <Card />
          <Footer />
        </Route>

        <Route exact path="/info">
          <HeaderInfo/>
          <Info />
          <Footer/>
        </Route>

        <Route exact path="/trip">
          <Redirect from="/trip" to="/connexion" />
          <HeaderTrip />
          <Trip />
          <Footer/>
        </Route>

        <Route exact path="/connexion">
          <HeaderLogin/>
       <Login/>
       <Footer/>
        </Route>

        <Route exact path="/inscription">
          <Header/>
          <Signin />
          <Footer/>
        </Route>

        <Route exact path="/profil">
          <Redirect from="/profil" to="/connexion" />
          <HeaderProfilUser />
          <ProfilUser />
          <Footer/>
        </Route>

        <Route exact path="/profilpage">
          <Redirect from="/profilpage" to="/connexion" />
          <HeaderDetailsProfil />
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
          <Header/>
          <NotFoundPage />
          <Footer/>
        </Route>

      </Switch>
      </div>
    </Router>
  );



 }

  /* if (loading) {
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
          <HeaderInfo />
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
          <HeaderContact />
          <Contact />
          <Footer />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>

      </Switch>
      </div>
    </Router>
  ); */
};


// == Export
export default App;
