import React,{ useState }  from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import OutsideArea from './Utils/OutsideArea';

const Header = () => {
    const [isMenuOpen, handleMenu] = useState(false);
    const handleCloseMenu = () => {
        handleMenu(false);
    };
    const handleStateChange = (state) => {
        handleMenu(state.isOpen);
    };

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
            </div>
            <OutsideArea runFunction={() => handleCloseMenu()}>
                <div className='navburger'>
                    <Menu
                        right
                        width={250}
                        isOpen={isMenuOpen}
                        onStateChange={handleStateChange}
                    >
                        <div className='navmenu'>
                            <NavLink className="navlink" to='/Home' activestyle="true" onClick={() => handleCloseMenu()}>
                                ANASAYFA
                            </NavLink>
                            <NavLink className="navlink" to='/AboutUs' activestyle="true" onClick={() => handleCloseMenu()}>
                                HAKKIMIZDA
                            </NavLink>
                            <NavLink className="navlink" to='/Fanila' activestyle="true" onClick={() => handleCloseMenu()}>
                                KASTAMONU FANİLASI
                            </NavLink>
                        </div>
                    </Menu>
                </div>
            </OutsideArea>
        </nav>
    )
};

export default Header;