import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {
  const [activeSection, setActiveSection] = useState('AboutMe');

  function handleLinkClick(section) {
    setActiveSection(section);
  }

  return (
    <header>
      <h1>My Portfolio</h1>
      <Navigation activeSection={activeSection} onLinkClick={handleLinkClick} />
    </header>
  );
}

export default Header;