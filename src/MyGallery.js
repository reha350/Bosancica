import React, { useState } from 'react';
import ReactBnbGallery from "react-bnb-gallery";

import 'react-bnb-gallery/dist/style.css';
import img1 from './images/1.JPG';
import img2 from './images/2.JPG';
import img3 from './images/3.JPG';


const PHOTOS = [
  {
    photo: img1,
    number: 1,
    caption: "lorem ipsum"

  },
  {
    photo: img2,
    number: 1,
    caption: "lorem ipsum"
  },
  {
    photo: img3,
    number: 1,
    caption: "lorem ipsum"
  }
]



function MyGallery() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        
              <button onClick={() => setIsOpen(true)}>
                Open gallery
              </button>
                <ReactBnbGallery
                show={isOpen}
                photos={PHOTOS}
                onClose={() => setIsOpen(false)}
              />
    </div>
  );
}
export default MyGallery;
