import React from 'react';

import m1 from "./images/mm1.jpg"
import m2 from "./images/mm2.jpg"
import m3 from "./images/mm3.jpg"
import m4 from "./images/mm4.jpg"
import m5 from "./images/mm5.jpg"
import m6 from "./images/mm6.jpg"
import m7 from "./images/mm7.jpg"

function Team() {
  return (
    <div>
            
            
            <div class="team-section">
    <div class="inner-width">
      <h1>Unser Team</h1>
      <div class="pers">


        <div class="pe">
          <img src = {m1}  alt=""></img>
          <div class="p-name">Ime Prezime</div>
          <div class="p-des">pozicija</div>
        </div>

        <div class="pe">
          <img src={m2}  alt=""></img>
          <div class="p-name">Adis Zahirovic</div>
          <div class="p-des">Potpredsjednik</div>
        </div>

        <div class="pe">
          <img src={m3}  alt=""></img>
          <div class="p-name">Ime Prezime</div>
          <div class="p-des">pozicija</div>
        </div>

        <div class="pe">
          <img src={m4}  alt=""></img>
          <div class="p-name">Ime Prezime</div>
          <div class="p-des">pozicija</div>
        </div>

        <div class="pe">
          <img src={m5}  alt=""></img>
          <div class="p-name">Ime Prezime</div>
          <div class="p-des">pozicija</div>


          {/*<div class="p-sm">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
          */}
        </div>

        <div class="pe">
          <img src={m6}  alt=""></img>
          <div class="p-name">Ime Prezime</div>
          <div class="p-des">pozicija</div>
        </div>

        <div class="pe">
          <img src={m7}  alt=""></img>
          <div class="p-name">Ime Prezime</div>
          <div class="p-des">pozicija</div>
        </div>

      </div>

    </div>
  </div>

    </div>
  );
}

export default Team;
