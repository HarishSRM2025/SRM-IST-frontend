import React, { useEffect } from 'react'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import Stats from '../Components/Home/Stats'
import Ranking from '../Components/Home/Ranking'
import News from '../Components/Home/News'
import Placements from '../Components/Home/Placements'
import Academics from '../Components/Home/Academics'
import CampusLife from '../Components/Home/CampusLife'
import VisionandMission from '../Components/Home/VisionandMission'
import Management from '../Components/Home/Management'
import AluminiVoice from '../Components/Home/AluminiVoice'
import VideoTestimonial from '../Components/Home/VideoTestimonial'
import Broucher from '../Components/Home/Broucher'
import Contact from '../Components/Home/Contact'



const Home = () => {

  // ✅ Scroll reveal (FIXED)
  useEffect(() => {
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
    <>
      <Hero />
      <About />
      <Stats />
      <Ranking />
      <News/>
      <Placements/>
      <Academics/>
      <CampusLife/>
      <VisionandMission/>
      <Management/>
      <AluminiVoice/>
      <VideoTestimonial/>
      <Broucher/>
      <Contact/>
    </>
  );
};

export default Home

