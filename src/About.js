import React from 'react';
import i4 from './images/about/4.jpg';
import i3 from './images/about/3.JPG';
import "./about.css";
import Team from './Team';

function About() {
  return (
    <div>
        <div className="PageTitle">
                  <h1>Über Uns</h1>
        </div>
                  <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">
                          <p className="p1">
                                              2012 beschloss eine Gruppe von Liebhabern der bosnischen Tradition und Folklore, ein Verein zu gründen, 
                                              die diese Tradition pflegt und vorm Vergessen bewahren wird. Der genaue Tag war der 15. Dezember 2012 
                                              an dem in München der Kulturverein „Bosancica“ gegründet wurde. Seitdem bringt derselbe Verein Bosnier und Herzegowiner 
                                              aus verschiedenen Teilen des Landes zusammen, die den gleichen Wunsch und das gleiche Ziel haben. 
                                              Die bosnische Tradition zu pflegen und vor dem Vergessen zu bewahren.
                                              
                                              Die Bräuche und Traditionen aller Völker und Nationalitäten Bosniens und Herzegowinas werden gepflegt. 
                                              Aber nicht nur das, die bosnische Sprache zu bewahren, ist eine der Aufgaben unserer Kulturgesellschaft.

                                              Die Mitglieder sind in zwei Folkloregruppen unterteilt, Tini und Bambini, 
                              die unsere Tradition sowohl in München und Umgebung als auch in ganz Deutschland, 
                              aber auch in den umliegenden Ländern vertreten

                           </p>

                        </div>
                    </div>
                      
        </div> 
        <div class="container"> 
          <div class="box-a">
              <img src={i4} alt="about-pic" className="about-pic2"></img>
            
            </div>
            </div>
            <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">
                          <p className="p1">
                          Die Mitglieder sind in zwei Folkloregruppen unterteilt, Tini und Bambini, 
             die unsere Tradition sowohl in München und Umgebung als auch in ganz Deutschland, 
             aber auch in den umliegenden Ländern vertreten

                          Jedes Jahr organisieren wir Eid-Treffen und feiern
              das Jubiläum unserer Gesellschaft, in der unsere 
              Stars der Bühne für Spaß und angenehme Geselligkeit 
              für alle unsere Besucher sorgen. Die heute traditionelle 
              Kolacijada ist ebenfalls unverzichtbar. Ziel ist es, 
              Mittel für die Behandlung kranker Kinder in 
              Bosnien und Herzegowina zu sammeln.

                           </p>
                        </div>
                    </div>
                    </div> 

               <div class="container"> 
              <div class="box-a">
              <img src={i3} alt="about-pic" className="about-pic2"></img>
            
            </div>
            </div>       

        <Team />                
            
    </div>     
  );                  
}

export default About;
