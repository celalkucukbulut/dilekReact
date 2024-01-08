import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => (
    <div className='page'>
    <div className='content'>
        <h2>Aradığınız sayfaya ulaşılamadı.</h2><br></br>
        <a className="link" href="/">Anasayfaya Dön</a>
    </div>
</div>
);

export default NotFound;