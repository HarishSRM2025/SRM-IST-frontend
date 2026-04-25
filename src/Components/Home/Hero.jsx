import React from 'react';
import { FaArrowRight, FaPlayCircle, FaAngleDoubleDown } from "react-icons/fa";
import heroImage from '../../assets/images/home/hero-home.JPG';

const Hero = () => {
  
  return (
    <section className="hero" id="home">

      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      <div className="hero-inner">
        <span className="hero-eye">
          World Class Education — Now In Trichy
        </span>

        <h1 className="hero-title">
          SRM <br />
          <span>Tiruchirappalli</span>
        </h1>

        <div className="hero-btm">
          <p className="hero-desc">
            Shaping minds, building futures. SRM Institute of Science and Technology, Trichy offers industry-leading programs designed to propel students into a changing world.
          </p>

          <div className="hero-acts">
            <button className="btn btn-gold">
              Explore Programs <FaArrowRight />
            </button>

            <button className="btn btn-outline-light">
              <FaPlayCircle /> Virtual Tour
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="s-line"></span>
        <FaAngleDoubleDown />
        Scroll to Explore
      </div>

    </section>
  );
};

export default Hero;