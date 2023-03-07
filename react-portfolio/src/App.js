import './App.css';
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="app">
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;