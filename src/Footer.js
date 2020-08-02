import React from 'react';
import placeholder from './images/placeholder1.jpg'
import './App.css';

function Footer() {
  return (
    <div className="FooterBG">
      <div className="sponsors">
        <ul className="s-list">
            <li> <img src={placeholder} alt=""/>  </li>
            <li><img src={placeholder} alt=""/> </li>
            <li><img src={placeholder} alt=""/> </li>
       </ul>

        <div className="footer">
          <p>KUD Bosančica Copyright 2012-2020 Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist: KUD Bosancica Muenchen </p>
        </div> 
      </div>
    </div>
  );
}

export default Footer;
