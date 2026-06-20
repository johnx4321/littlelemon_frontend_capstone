import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <header className="nav-bar">
        <Header />
        <Nav />
      </header>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
