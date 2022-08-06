import React from 'react';
import logo from '../images/post-it.png'

const Header = () => {
    return (
        <header className='header-main'>
            <div className='logo-sec'>
                <img src={logo} alt="" />
                <h1>Start Note</h1>
            </div>
            <div>
                <h2>All Notes</h2>
            </div>
        </header>
    );
};

export default Header;