import React from 'react';


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="max-width">
        <div className="logo">
          <a href="#">Portfo<span>lio</span></a>
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
    </div>
  );
}

export default NavBar;