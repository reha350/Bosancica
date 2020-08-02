import React from 'react';

import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
      color: "white"
  }

  return (
    <div className="navBar">
      
      <nav>
      
          <ul className="nav-links">
              <Link style={navStyle} to="/">
                <li>Start</li>
              </Link>
              
              <Link style={navStyle} to="/about">
                <li>Über Uns</li>
              </Link>
              <Link style={navStyle} to="/events">
                <li>Veranstaltungen</li>
              </Link>
              <Link style={navStyle} to="/Contact">
                <li>Kontakt</li>
              </Link>
          </ul>
          
      </nav>

    </div>
  );
}

export default Nav;
