import React from 'react';
import './Topbar.css'
import Logo from './pluglogo.png';

function TopNav() {

    return (
        <div className="top-bar">
            <i className="fas fa-bars"></i>
            <img className="plug-logo" src={Logo} alt="plug-logo" height="60" width="60" />
        </div>
    )

}

export default TopNav;