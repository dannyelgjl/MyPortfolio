import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { MdDeveloperBoard } from 'react-icons/md'

import "./styles.css"

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Services</h2>
        <div className="serv-content">
            <div className="card">
              <div className="box">
                <FaPaintBrush  />
                <div className="text">VAI SE FODER</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis veritatis impedit sit quae adipisci iusto odit, laborum deleniti facilis.</p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <MdDeveloperBoard  />
                <div className="text">Software developer</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis veritatis impedit sit quae adipisci iusto odit, laborum deleniti facilis.</p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <AiOutlineAntDesign   />
                <div className="text">UX</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis veritatis impedit sit quae adipisci iusto odit, laborum deleniti facilis.</p>
              </div>
            </div>
        </div>
     </div>
    </section>
  );
}

export default Services;