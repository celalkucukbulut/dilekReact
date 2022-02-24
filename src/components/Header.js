import React from 'react'
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'


const Header = () => {

    return (
        <nav className='nav'>
            <NavLink className="navlink" to='/'>
                <img src={require('../Images/logo.png')} alt='logo' />
            </NavLink>
            <div className='navmenu'>
                <NavLink className="navlink" to='/Home' activestyle="true">
                    ANASAYFA
                </NavLink>
                <NavLink className="navlink" to='/AboutUs' activestyle="true">
                    HAKKIMIZDA
                </NavLink>
                <NavLink className="navlink" to='/Fanila' activestyle="true">
                    KASTAMONU FANİLASI
                </NavLink>
                <NavLink className="navlink" to='/Products' activestyle="true">
                    ÜRÜNLERİMİZ
                </NavLink>
                <NavLink className="navlink" to='/ContactUs' activestyle="true">
                    İLETİŞİM
                </NavLink>
            </div>
            <div className='navburger'>
                <Menu right width={250} >
                    <div className='navmenu'>
                        <NavLink className="navlink" to='/Home' activestyle="true">
                            ANASAYFA
                        </NavLink>
                        <NavLink className="navlink" to='/AboutUs' activestyle="true">
                            HAKKIMIZDA
                        </NavLink>
                        <NavLink className="navlink" to='/Fanila' activestyle="true">
                            KASTAMONU FANİLASI
                        </NavLink>
                        <NavLink className="navlink" to='/Products' activestyle="true">
                            ÜRÜNLERİMİZ
                        </NavLink>
                        <NavLink className="navlink" to='/ContactUs' activestyle="true">
                            İLETİŞİM
                        </NavLink>
                    </div>
                </Menu>
            </div>
        </nav>
    )
};

export default Header;