import React, { useState, useEffect } from 'react';

import './styles.css';


const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  
  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
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
          <script src="../../script.js" ></script>
        
      </div>
    </div>
  );
}

export default NavBar;