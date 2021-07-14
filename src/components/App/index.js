// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Search from '../Search';
import Main from '../Main';
import Footer from '../Footer';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Search />
    <Main />
    <Footer />
  </div>
);

// == Export
export default App;
