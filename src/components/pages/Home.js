import React from 'react'
import Products from './Products';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div className='page'>
            <Products></Products>
            <ContactUs></ContactUs>
        </div>
    )
};

export default Home;