import React from 'react';
import { FaArrowRight, FaPlayCircle, FaAngleDoubleDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import heroImage1 from '../../assets/images/home/hero-home.JPG';
import heroImage2 from '../../assets/images/home/campus-home.JPG';
import heroImage3 from '../../assets/images/home/about-home.JPG';

const Hero = () => {
  const slides = [
    {
      bg: heroImage1,
      eye: "World Class Education — Now In Trichy",
      title1: "SRM",
      title2: "Tiruchirappalli",
      desc: "Shaping minds, building futures. SRM Institute of Science and Technology, Trichy offers industry-leading programs designed to propel students into a changing world."
    },
    {
      bg: heroImage2,
      eye: "A Vibrant Community",
      title1: "Experience",
      title2: "Campus Life",
      desc: "Discover a vibrant campus with state-of-the-art facilities, diverse clubs, and endless opportunities to grow beyond the classroom."
    },
    {
      bg: heroImage3,
      eye: "Excellence in Research",
      title1: "Innovate &",
      title2: "Discover",
      desc: "Join our thriving research community dedicated to solving real-world challenges through cutting-edge technology and innovation."
    }
  ];

  return (
    <section className="hero" id="home">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '72px' }}>
            <div className="hero-bg" style={{ backgroundImage: `url(${slide.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
            
            {/* Dark overlay for better text readability */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>

            <div className="hero-inner" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
              <span className="hero-eye">
                {slide.eye}
              </span>

              <h1 className="hero-title">
                {slide.title1} <br />
                <span>{slide.title2}</span>
              </h1>

              <div className="hero-btm">
                <p className="hero-desc">
                  {slide.desc}
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="scroll-hint" style={{ zIndex: 20 }}>
        <span className="s-line"></span>
        <FaAngleDoubleDown />
        Scroll to Explore
      </div>

    </section>
  );
};

export default Hero;