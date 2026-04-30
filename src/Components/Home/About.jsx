import React from 'react';
import aboutImage from '../../assets/images/home/about-home.JPG';

const About = () => {
  return (
    <div className="wc-section" id="about">
      <div className="wrap">
        <div className="wc-grid">

          <div className="rev">
            <span className="s-tag">About SRM Trichy</span>

            <h2 className="s-title">
              World Class <em>Education</em>
              <br />
              Now in Trichy
            </h2>

            <div className="gold-bar"></div>

            <p className="wc-body" style={{textAlign:'justify'}}>
              SRM Institute of Science and Technology, Trichy is a state-of-the-art campus committed to academic excellence, innovation, and holistic development. With world-class infrastructure, distinguished faculty, and industry partnerships, we offer students a transformative experience.
            </p>

            <p className="wc-body" style={{textAlign:'justify'}}>
              Our programs blend theoretical knowledge with practical application, preparing graduates to excel in global careers and contribute meaningfully to society.
            </p>

            <button className="btn btn-gold">
              Learn More 
            </button>
          </div>

          <div className="wc-img rev d2">
            <img src={aboutImage} alt="SRM Campus" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;