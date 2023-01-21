import React from 'react';
import ImageGallery from 'react-image-gallery';

//#region   import images

import slider1 from '../Images/slider1.jpg';
import dilekFanila from '../Images/dilekFanila.jpg';
import ihsangazi from '../Images/ihsangazi.jpg';
//#endregion

const images = [
    {
        original: slider1,
        originalHeight: 300,
    },{
        original: dilekFanila,
        originalHeight: 300,
    },{
        original: ihsangazi,
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
            isRTL = {false}
            items={images} />
    )
};

export default Slider;

