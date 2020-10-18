import React from 'react';

import me from '../../assets/images/me.JPG';

import './styles.css';

const Cards = () => {
  return (
    <section className="about" id="about">
    <div className="max-width">
    <h2 className="title">About me</h2>
      <div className="about-content">
        <div className="collumn left">
          <img src={me} alt=""/>
        </div>
      </div>
    </div>
  </section>
  ) 
}

export default Cards;