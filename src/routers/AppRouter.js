import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import AboutUs from '../components/pages/AboutUs';
import Fanila from '../components/pages/Fanila';
import Products from '../components/pages/Products';
import ContactUs from '../components/pages/ContactUs';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Fanila" element={<Fanila />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;