import React from 'react';
import { Slide} from 'react-slideshow-image';

import allColors from '../../Images/allColors.jpg';
import kart from '../../Images/Kart.PNG';
import shopInside from '../../Images/ShopInside-3.jpg';
import nasrullah from '../../Images/Nasrullah.jpg';

const Slider = () => {
    return (
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${allColors})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${kart})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${shopInside})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${nasrullah})` }}>
                    </div>
                </div>
            </Slide>
        </div>
    )
};

export default Slider;

