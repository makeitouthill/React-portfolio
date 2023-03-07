import './App.css';
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;