import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-icons">
        <li>
          <a href="https://github.com/makeitouthill" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alex-horning-04249225a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
        </li>
      </ul>
        </footer>
    );
}

export default Footer;