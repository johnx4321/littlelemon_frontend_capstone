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
      <div className="nav-bar">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
