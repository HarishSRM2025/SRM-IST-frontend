import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Recruiters = () => {
  // Dynamically import all 58 top logo images
  const topLogos = Array.from({ length: 58 }, (_, i) => 
    new URL(`../../assets/images/placement/recruiters/top/${i + 1}.jpg`, import.meta.url).href
  );

  // Dynamically import all 57 bottom logo images
  const bottomLogos = Array.from({ length: 57 }, (_, i) => 
    new URL(`../../assets/images/placement/recruiters/bottom/${i + 1}.jpg`, import.meta.url).href
  );

  // Swiper configuration for scrolling rows
  const swiperOptions = (reverse = false) => ({
    modules: [Autoplay],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      reverseDirection: reverse
    },
    breakpoints: {
      480: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 25 },
      1024: { slidesPerView: 6, spaceBetween: 30 }
    }
  });

  return (
    <section className="pl-section pl-bg-cream">
      <div className="wrap">
        <span className="s-tag">TOP RECRUITERS</span>
        <h2 className="s-title">Glimpse of Our <em>Recruiters</em></h2>
        <div className="gold-bar"></div>
        
        <div className='recruiter-sec' style={{ marginTop: '54px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Row 1: Top Logos Scrolling Left */}
          <div className="recruiter-row top-row">
            <Swiper {...swiperOptions(false)} className="pl-recruit-swiper" style={{ padding: '10px 0' }}>
              {topLogos.map((logoUrl, index) => (
                <SwiperSlide key={`top-${index}`}>
                  <div className="pl-recruit-logo" style={{ height: '90px' }}>
                    <img 
                      src={logoUrl} 
                      alt={`Recruiter Partner ${index + 1}`} 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Row 2: Bottom Logos Scrolling Right */}
          <div className="recruiter-row bottom-row">
            <Swiper {...swiperOptions(true)} className="pl-recruit-swiper" style={{ padding: '10px 0' }}>
              {bottomLogos.map((logoUrl, index) => (
                <SwiperSlide key={`bottom-${index}`}>
                  <div className="pl-recruit-logo" style={{ height: '90px' }}>
                    <img 
                      src={logoUrl} 
                      alt={`Recruiter Partner ${index + 59}`} 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Recruiters;
