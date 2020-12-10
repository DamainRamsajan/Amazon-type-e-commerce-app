import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className = "header"> 
            <img className = "header__logo" alt="" src= "/images/calabash.png" />

            <div className = "header__search">
                <input className = "header__searchInput" type= "text" />
            </div>

            <div className = "header__nav">
                
            </div>
        </div>
    )
}

export default Header
