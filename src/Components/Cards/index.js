import React from 'react';

import me from '../../assets/images/m1.JPG';

import './styles.css';

const Cards = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={me} alt=""/>
            </div>

            <div className="column rigth">
              <div className="text">I'm Daniel and I'm <span>Software Developer</span> </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ratione quam repellat odio reprehenderit obcaecati dignissimos eos optio architecto laborum? Qui voluptatem aspernatur illum maiores sint similique accusantium at ipsa molestias, reprehenderit veniam rerum, nemo perspiciatis neque, error ipsam. Modi voluptates cupiditate tenetur non consequatur, incidunt itaque? Amet expedita architecto, deleniti ullam quidem quas nihil quasi ducimus, mollitia iste impedit.</p>
              <a href="">Dowload Cv</a>
            </div>
        </div>
      </div>
  </section>
  ) 
}

export default Cards;