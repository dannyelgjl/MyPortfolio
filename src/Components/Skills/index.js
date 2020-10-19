import React from 'react';

import './styles.css'

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & expriences</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad ab mollitia deserunt nobis impedit sapiente vero praesentium quaerat ducimus aperiam quasi nemo consequuntur qui voluptatem nihil, laborum, quo consequatur quod a dicta delectus sint accusamus? Nesciunt expedita nostrum harum.</p>
            <a href="#">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="line css"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>90%</span>
               
              </div>
              <div className="line javascript"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span>ReactJs</span>
                <span>90%</span>
                
              </div>
              <div className="line reactjs"></div>
            </div>
          </div>
        </div>
         
      </div>
    </section>
  );
}

export default Skills;