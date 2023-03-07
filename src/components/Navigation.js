import React from 'react';

function Navigation({ activeSection, onLinkClick }) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => onLinkClick('AboutMe')}>
            About Me {activeSection === 'AboutMe' && '(active)'}
          </button>
        </li>
        <li>
          <button onClick={() => onLinkClick('Portfolio')}>
            Portfolio {activeSection === 'Portfolio' && '(active)'}
          </button>
        </li>
        <li>
          <button onClick={() => onLinkClick('Contact')}>
            Contact {activeSection === 'Contact' && '(active)'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
