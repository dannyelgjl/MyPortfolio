import React from 'react';

import './styles.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="max-width" id="teste">
        <div className="logo"><a href="#">Portfo<span>lio</span></a></div>
            <ul className="menu">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Skills</a></li>
              <li><a href="">Teams</a></li>
              <li><a href="">Contact</a></li>
            </ul>
        
      </div>
    </div>
  );
}

export default NavBar;