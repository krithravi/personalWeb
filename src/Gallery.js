import React from 'react';
import { Fade } from 'react-slideshow-image';


var objwidth=300;

const fadeProperties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	onChange: (oldIndex, newIndex) => {
		console.log(`fade transition from ${oldIndex} to ${newIndex}`);
	}
}

const Gallery = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
            <img src={ require('./frogs/goldenpoisonfrog.png')} style={{margin:"0 auto"}}/>
        </div>
        <div className="each-fade">
            <img src={ require('./frogs/africanbullfrog.png')} style={{margin:"0 auto"}}/>
        </div>
        <div className="each-fade">
            <img src={ require('./frogs/anthonypafrogs.png')} style={{margin:"0 auto"}}/>
        </div>
      </Fade>
    </div>


  )
}


export default Gallery;
