import React from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contact() {
  return (

    <div>
          
          <div className="TitleBG">
            <div className="PageTitle">
                  <h1>Kontakt</h1>
            </div>
          </div>
          <div class="box-bg">
          <div className="container-termine">
              <h2>Termine</h2> 
              <p> Die Proben finden Sonntags in der Feuerwache Ganghoferstr.41  in 4 Gruppen statt. </p>
                <ul className="time-list">
                  <li>
                    Kinder von 6 bis 12 Jahren von 12:30 bis 13:30 Uhr 
                  </li>
                  <li>
                    Startgruppe von 13.30 bis 14.45 Uhr
                  </li>  
                  <li>
                    Tinis B von 14:45 bis 15:45
                  </li> 
                  <li>
                    Tinis A von 15:45 bis 16:45
                  </li> 
                  <li>
                  Erwachsenengruppe 16:45 bis 18:00 Uhr
                  </li>   
                </ul>  
                  
                  
                  
                  
                </div>      
            </div>


          <div className="bodydiv">
              <div class="card">
                <a href="mailto:kudbosancica@web.de">
                  <FontAwesomeIcon icon="envelope" className="fIcon"/>
                  <div class="card-content">
                      <h3>Email</h3>
                      <span>kudbosancica@web.de</span>
                  </div>
                  </a>
              </div>

              <div class="card">
                <a href="tel:004917620172524">
                  <FontAwesomeIcon icon="phone" className="fIcon" /> 
                  <div class="card-content">
                      <h3>Telefon</h3>
                      <span>+49 176 20172524</span>
                  </div>
                  </a>
              </div>
                <div class="card">
                <a href="https://www.google.com/maps/place/Ganghoferstra%C3%9Fe+41,+80339+M%C3%BCnchen/@48.13043,11.54037,15z/data=!4m5!3m4!1s0x479dd8adcc184b01:0x10941b38af7560b2!8m2!3d48.13043!4d11.54037?hl=de">

                    <FontAwesomeIcon icon="map-marker-alt" className="fIcon"/>
                    <div class="card-content">
                        <h3>Ganghoferstr 41</h3>
                        <span>80339 München</span>
                    </div>
                    </a>
                </div>
              
                
              </div>        
                                                                                      
          
    </div>
  );
}

export default Contact;


