import React from "react";
import Breadcrum from "../Common/Breadcrum";
import heroImg from "../../assets/hero.png"; 

const Hero = () => {
  return (
    <Breadcrum 
      title="Career & <span style='color: var(--gold)'>Placement</span>"
      bgImage={heroImg}
      paths={[{ name: 'Home', link: '/' }, { name: 'Placement' }]}
    />
  );
};

export default Hero;
