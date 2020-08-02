import React, { useState } from 'react';
import ReactBnbGallery from "react-bnb-gallery";

import 'react-bnb-gallery/dist/style.css';
import Slider from './slider';
import i1 from "./images/home_1.jpg"
import i2 from "./images/about/2.JPG"
import i3 from "./images/home_3.JPG"
import i4 from "./images/home_4.JPG"

import img1 from './images/gallery/1.JPG';
import img2 from './images/gallery/2.JPG';
import img3 from './images/gallery/3.JPG';
import img4 from './images/gallery/4.JPG';
import img5 from './images/gallery/5.JPG';
import img6 from './images/gallery/6.JPG';
import img7 from './images/gallery/7.JPG';
import img8 from './images/gallery/8.JPG';
import img9 from './images/gallery/9.JPG';
import img10 from './images/gallery/10.JPG';
import img11 from './images/gallery/11.JPG';
import img12 from './images/gallery/12.JPG';
import img13 from './images/gallery/13.JPG';
import img14 from './images/gallery/14.JPG';
import img15 from './images/gallery/15.JPG';
import img16 from './images/gallery/16.JPG';
import img17 from './images/gallery/17.JPG';
import img18 from './images/gallery/18.JPG';
import img19 from './images/gallery/19.JPG';
import img20 from './images/gallery/20.JPG';
import img21 from './images/gallery/21.JPG';
import img22 from './images/gallery/22.JPG';
import img23 from './images/gallery/23.JPG';
import img24 from './images/gallery/24.JPG';
import img25 from './images/gallery/25.JPG';
import img26 from './images/gallery/26.JPG';
import img27 from './images/gallery/27.JPG';
import img28 from './images/gallery/28.JPG';
import img29 from './images/gallery/29.JPG';
import img30 from './images/gallery/30.JPG';
import img31 from './images/gallery/31.JPG';
import img32 from './images/gallery/32.JPG';
import img33 from './images/gallery/33.JPG';
import img34 from './images/gallery/34.JPG';
import img35 from './images/gallery/35.JPG';
import img36 from './images/gallery/36.JPG';
import img37 from './images/gallery/37.JPG';
import img38 from './images/gallery/38.JPG';
import img39 from './images/gallery/39.JPG';
import img40 from './images/gallery/40.JPG';
import img41 from './images/gallery/41.JPG';
import img42 from './images/gallery/42.JPG';
import img43 from './images/gallery/43.JPG';
import img44 from './images/gallery/44.JPG';
import img45 from './images/gallery/45.JPG';
import img46 from './images/gallery/46.JPG';
import img47 from './images/gallery/47.JPG';
import img48 from './images/gallery/48.JPG';
import img49 from './images/gallery/49.jpg';


const PHOTOS = [
  {
    photo: img1,
    number: 1,

  },
  {
    photo: img2,
    number: 2,
  },
  {
    photo: img3,
    number: 3
  },
  {
    photo: img4,
    number: 4,

  },
  {
    photo: img5,
    number: 5,
  },
  {
    photo: img6,
    number: 6,
  },
  {
    photo: img7,
    number: 7,

  },
  {
    photo: img8,
    number: 8,
  },
  {
    photo: img9,
    number: 9
  },
  {
    photo: img10,
    number: 10,

  },
  {
    photo: img11,
    number: 11,
  },
  {
    photo: img12,
    number: 12,

  },
  {
    photo: img13,
    number: 13,
  },
  {
    photo: img14,
    number: 14
  },
  {
    photo: img15,
    number: 15,

  },
  {
    photo: img16,
    number: 16,
  },
  {
    photo: img17,
    number: 17,

  },
  {
    photo: img18,
    number: 18,
  },
  {
    photo: img19,
    number: 19
  },
  {
    photo: img20,
    number: 20,

  },
  {
    photo: img21,
    number: 21,
  },
  {
    photo: img22,
    number: 22,

  },
  {
    photo: img23,
    number: 23,
  },
  {
    photo: img24,
    number: 24
  },
  {
    photo: img25,
    number: 25,

  },
  {
    photo: img26,
    number: 26,
  },
  {
    photo: img27,
    number: 27,

  },
  {
    photo: img28,
    number: 28,
  },
  {
    photo: img29,
    number: 29
  },
  {
    photo: img30,
    number: 30,

  },
  {
    photo: img31,
    number: 31,
  },
  {
    photo: img32,
    number: 32,

  },
  {
    photo: img33,
    number: 33,
  },
  {
    photo: img34,
    number: 34
  },
  {
    photo: img35,
    number: 35,

  },
  {
    photo: img36,
    number: 36,
  },
  {
    photo: img37,
    number: 37,

  },
  {
    photo: img38,
    number: 38,
  },
  {
    photo: img39,
    number: 39
  },
  {
    photo: img40,
    number: 40,

  },
  {
    photo: img41,
    number: 41,
  },
  {
    photo: img42,
    number: 42,

  },
  {
    photo: img43,
    number: 43,
  },
  {
    photo: img44,
    number: 44
  },
  {
    photo: img45,
    number: 45,

  },
  {
    photo: img46,
    number: 46,
  },
  {
    photo: img47,
    number: 47,

  },
  {
    photo: img48,
    number: 48,
  },
  {
    photo: img49,
    number: 49
  },

]

function Home() {

  const [isOpen, setIsOpen] = useState(false);
        
  return (
    <div> 

        <Slider />

        <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">
                          <h3 className="h3">
                          In unserer achtjährigen Arbeit bemühen wir sich die Gesellschaft, die bosnische Kultur auf die Bürger des Landes zu übertragen, in dem wir leben, 
                          und so zur Entwicklung des gemeinsamen Lebens von Migranten und Bürgern des Gastlandes beizutragen.
                           </h3>
                           <img src={i1} alt="about-pic" className="about-pic"></img>
                        </div>
                    </div>
                      
        </div>

        <div class="container"> 
          <div class="box-a">
              <img src={i2} alt="about-pic" className="about-pic"></img>

             <h3 className="h2">
              Bambini sind zwischen 6 und 12 Jahre alt.
              In diesem Ensemble versammeln wir über 15 Kinder, die fleißig unter der Leitung von OSOBA_NN üben und arbeiten.
              Diese Gruppe ist der Stolz von Bosancica.
              Die Gruppe hat bereits einige Choreografien in ihrem Repertoire und es kann frei gesagt werden, dass echte Spieler aus dieser Gruppe erwachsen werden.
            </h3>
            
            </div>
         </div>
           
         <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">
                          <h3 className="h3">
                              Tinis im Alter von X bis Y Jahren hat Z Spieler.
                              Bosancica investiert viel in diese Gruppe, weil aus dieser Gruppe später echte Spieler hervorgehen, 
                              die erfolgreich den Stolz unseres Kud präsentieren.
                              Neben der Folklore zeichnen sich die Mitglieder dieses Ensembles durch außergewöhnliche schulische Erfolge 
                              aus und nehmen sich neben ihren schulischen Verpflichtungen die Zeit, unsere Kultur zu pflegen, 
                              was besonderen Respekt und Dankbarkeit hervorruft.
                           </h3>
                           <img src={i3} alt="about-pic" className="about-pic"></img>
                        </div>
                    </div>
                      
        </div>


        <div class="container"> 
          <div class="box-a">
              <img src={i4} alt="about-pic" className="about-pic"></img>

             <h3 className="h2">
              Das Erwachsenen-Ensemble, wie wir es bereits nennen, versammelt Eltern, die sich nach Spielen, Liedern und Geselligkeit sehnen.
            </h3>
            </div>
         </div>
        
         <div class="box-bg">
                   <div class="container"> 
                        <p className="g-text">
                          In unserer Gallerie finden sie noch mehr Bilder von unserer vergangenen Veranstaltungen.
                        </p>
                        <div class="box-a">
                        <button onClick={() => setIsOpen(true)}> 
                                Gallerie öffnen
                              </button>
                                <ReactBnbGallery
                                show={isOpen}
                                photos={PHOTOS}
                                onClose={() => setIsOpen(false)}
                              />
                        </div>
                    </div>
                      
        </div>

    </div>
  );
}


export default Home;
