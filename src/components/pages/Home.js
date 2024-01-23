import React from 'react';
import Products from '../Products';
import ContactUs from '../ContactUs';
import Introduction from '../Introduction';

const Home = () => {
    return (
        <div className='page'>
            <Introduction></Introduction>
            <Products></Products>
            <ContactUs></ContactUs>
        </div>
    )
};

export default Home;