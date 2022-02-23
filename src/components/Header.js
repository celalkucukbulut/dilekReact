import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {

    return (
        <nav className='nav'>
            <NavLink className="navlink" to='/'>
                <img src={require('../Images/logo.png')} alt='logo' />
            </NavLink>
            <div className='navmenu'>
                <NavLink className="navlink" to='/Home' activeStyle>
                    ANASAYFA
                </NavLink>
                <NavLink className="navlink" to='/AboutUs' activeStyle>
                    HAKKIMIZDA
                </NavLink>
                <NavLink className="navlink" to='/Fanila' activeStyle>
                    KASTAMONU FANİLASI
                </NavLink>
                <NavLink className="navlink" to='/Products' activeStyle>
                    ÜRÜNLERİMİZ
                </NavLink>
                <NavLink className="navlink" to='/ContactUs' activeStyle>
                    İLETİŞİM
                </NavLink>
            </div>
        </nav>
    )
};

export default Header;