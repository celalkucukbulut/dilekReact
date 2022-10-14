import React from 'react';
import ImageGallery from 'react-image-gallery';

//#region   import images

import slider1 from '../Images/slider1.jpg';
import slider2 from '../Images/slider2.jpg';
import slider3 from '../Images/slider3.jpg';

//#endregion

const images = [
    {
        original: slider1,
        originalHeight: 300,
    },
    {
        original: slider2,
        originalHeight: 300,
    },
    {
        original: slider3,
        originalHeight: 300,
    }
];


const Slider = () => {    
    return (
        <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            slideDuration={400}
            slideInterval={10000}
            autoPlay = {true}
            isRTL = {true}
            items={images} />
    )
};

export default Slider;

