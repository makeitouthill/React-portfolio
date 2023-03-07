import './App.css';
import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;