import React, { useEffect } from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import QuickLinks from '../Components/CareerDevelopmentCentre/QuickLinks';
import About from '../Components/CareerDevelopmentCentre/About';
import VisionMission from '../Components/CareerDevelopmentCentre/VisionMission';
import WelcomeMessage from '../Components/CareerDevelopmentCentre/WelcomeMessage';
import Testimonials from '../Components/CareerDevelopmentCentre/Testimonials';

import '../css/CareerDevelopmentCentre.css';
import heroImg from '../assets/hero.png';

const CareerDevelopmentCentre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll reveal observer
    const elements = document.querySelectorAll('.rev');
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('vis');
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => revObs.observe(el));

    return () => revObs.disconnect(); // cleanup
  }, []);

  return (
    <div className="cdc-page">
      {/* Hero section */}
      <Breadcrum
        title="Career Development Centre (CDC-CET)"
        paths={[
          { name: 'Home', link: '/' },
          { name: 'Placements', link: '/placement' },
          { name: 'CDC-CET' }
        ]}
        bgImage={heroImg}
      />
      
      {/* Quick Links Bar */}
      <QuickLinks />

      {/* About Section */}
      <About />

      {/* Vision & Mission Section */}
      <VisionMission />

      {/* Welcome Message Section */}
      <WelcomeMessage />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default CareerDevelopmentCentre;
