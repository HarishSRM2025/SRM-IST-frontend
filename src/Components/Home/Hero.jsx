import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaPlayCircle, FaAngleDoubleDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    const normalizedPath = imagePath.replace(/\\/g, '/');
    const apiBase = (import.meta.env.VITE_API_URL || 'http://localhost:3000/api').replace('/api', '');
    return normalizedPath.startsWith('public/')
      ? `${apiBase}/${normalizedPath}`
      : `${apiBase}/public/uploads/${normalizedPath.split('/').pop()}`;
  };

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
        const response = await fetch(`${apiUrl}/slider/sliders`);
        const json = await response.json();
        
        if (json.success && Array.isArray(json.data)) {
          const activeSliders = json.data.filter(item => item.sliderStatus === 'active');
          const mappedSlides = activeSliders.map(item => {
            const words = (item.title || '').split(' ');
            const title1 = words[0] || '';
            const title2 = words.slice(1).join(' ') || '';
            return {
              bg: getImageUrl(item.image),
              eye: item.tagLine,
              title1,
              title2,
              desc: item.description,
              ctaText1: item.ctaText1,
              ctaLink1: item.ctaLink1,
              ctaText2: item.ctaText2,
              ctaLink2: item.ctaLink2
            };
          });
          setSlides(mappedSlides);
        }
      } catch (error) {
        console.error('Error fetching sliders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  if (loading) {
    return (
      <section className="hero" id="home" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a192f', color: '#fff' }}>
        <div style={{ fontSize: '18px', fontWeight: '500', letterSpacing: '1px' }}>Loading...</div>
      </section>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="hero" id="home">
      <Swiper
        key={slides.length}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
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
                  {slide.ctaText1 && (
                    <a href={slide.ctaLink1} className="btn btn-gold">
                      {slide.ctaText1} <FaArrowRight />
                    </a>
                  )}
 
                  {slide.ctaText2 && (
                    <a href={slide.ctaLink2} className="btn btn-outline-light">
                      <FaPlayCircle /> {slide.ctaText2}
                    </a>
                  )}
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