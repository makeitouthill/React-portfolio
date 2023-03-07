import './App.css';
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="app">
      <Header/>
      <AboutMe/>
      <Portfolio/>
    </div>
  );
}

export default App;