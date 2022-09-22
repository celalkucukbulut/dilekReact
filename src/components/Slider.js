import React from 'react';
import ImageGallery from 'react-image-gallery';

//#region  import images
import allColors from '../Images/allColors.jpg';
import kart from '../Images/Kart.PNG';
import shopInside from '../Images/ShopInside-3.jpg';
import nasrullah from '../Images/Nasrullah.jpg';
//#endregion

const images = [
    {
        original: allColors,
        originalHeight: 300,
    },
    {
        original: kart,
        originalHeight: 300,
    },
    {
        original: shopInside,
        originalHeight: 300,
    },
    {
        original: nasrullah,
        originalHeight: 300,
    },
];


const Slider = () => {    
    return (
        <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            slideDuration={400}
            slideInterval={8000}
            items={images} />
    )
};

export default Slider;

