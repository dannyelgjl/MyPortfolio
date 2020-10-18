import React from 'react';

import { AiOutlineGithub } from 'react-icons/ai'
import Cards from '../../Components/Cards';
import Services from '../../Components/Services';
import Skills from '../../Components/Skills';


import './styles.css';

const Home = () => {
  return (
  <>
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Daniel Jerônimo</div>
          <div className="text-3">And I'm a <span>Software Developer</span> </div>
          <a href="#">My Github  <AiOutlineGithub size={38}/></a>
        </div>
      </div>
    </section>

    <Cards />
    <Services />
    <Skills />
  </>
  );
}

export default Home;