import React from 'react';
import Poster from './images/poster_placeholder.jpg';

function Events() {
  return (
    <div>
        <div className="PageTitle">
                  <h1>Veranstaltungen</h1>
            </div>

        <div className="container">
          <img src={Poster} alt="Poster" className="box-img"></img>
        </div>
    </div>
  );
}

export default Events;
