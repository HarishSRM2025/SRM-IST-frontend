import React, { useState } from 'react';
import { FaAward, FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Controller, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../../css/Department.css'; 

import awardImg from '../../assets/images/home/award-home.JPG';
import innovationImg from '../../assets/images/home/innovation-home.jpg';

const Ranking = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const rankings = [
    {
      id: 1,
      image: awardImg,
      icon: <FaAward />,
      title: "NAAC A++",
      subtitle: "Highest Grade",
      desc: "Accredited with the highest grade of A++ by the National Assessment and Accreditation Council."
    },
    {
      id: 2,
      image: innovationImg,
      icon: <FaTrophy />,
      title: "NIRF Ranking",
      subtitle: "Top 20 Universities",
      desc: "Consistently ranked among the top 20 universities in India by the National Institutional Ranking Framework."
    },
    {
      id: 3,
      image: awardImg, // Reusing image for demonstration
      icon: <FaMedal />,
      title: "QS World Rankings",
      subtitle: "Global Recognition",
      desc: "Awarded a 4-star rating globally and 5 stars for teaching, employability, and inclusiveness."
    },
    {
      id: 4,
      image: innovationImg, // Reusing image for demonstration
      icon: <FaStar />,
      title: "ARIIA",
      subtitle: "Innovation Leader",
      desc: "Ranked among the top private universities in the Atal Ranking of Institutions on Innovation Achievements."
    },
    {
      id: 5,
      image: awardImg, // Reusing image for demonstration
      icon: <FaAward />,
      title: "NBA Accredited",
      subtitle: "Engineering Excellence",
      desc: "Multiple engineering programs accredited by the National Board of Accreditation for maintaining global standards."
    }
  ];

  return (
    <section className="ranking-section rev" style={{ padding: '80px 20px', background: '#f8f6f1' }}>
    
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="s-tag" style={{ color: 'var(--navy)' }}>OUR RECOGNITION</span>
          <h2 className="s-title" style={{ color: 'var(--navy)', marginBottom: 0 }}>Rankings & <em>Accreditations</em></h2>
          <div className="gold-bar" style={{ margin: '15px auto 0' }}></div>
          <p className="overview-text" style={{ maxWidth: '700px', margin: '20px auto 0', textAlign: 'center' }}>
            SRM Institute of Science and Technology is globally and nationally recognized for its exceptional standards in education, research, and innovation.
          </p>
        </div>

        <div className="ranking-grid">
          {/* Logo / Image Swiper */}
          <div style={{ minWidth: 0, width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Swiper
              modules={[Controller, EffectFade]}
              effect="fade"
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
              allowTouchMove={false}
            >
              {rankings.map(rank => (
                <SwiperSlide key={`img-${rank.id}`}>
                  <div style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    background: 'var(--navy)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={rank.image} 
                      alt={rank.title} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }} 
                    />
                    {/* Overlay gradient for premium look */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(11,29,53,0.8) 0%, transparent 50%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '30px'
                    }}>
                       <div style={{ color: 'var(--gold)', fontSize: '40px', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.5))' }}>
                         {rank.icon}
                       </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Content Swiper */}
          <div style={{ minWidth: 0, width: '100%' }}>
            <Swiper
              modules={[Controller, Autoplay, Pagination, Navigation]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.custom-rank-pagination' }}
              navigation={{ nextEl: '.rank-next', prevEl: '.rank-prev' }}
              grabCursor={true}
            >
              {rankings.map(rank => (
                <SwiperSlide key={`content-${rank.id}`}>
                  <div style={{ padding: '10px 0' }}>
                    <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(200,149,42,0.15)', color: 'var(--gold)', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px', borderRadius: '30px' }}>
                      {rank.subtitle}
                    </div>
                    <h3 style={{ color: 'var(--navy)', fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '25px', fontFamily: 'var(--font-serif)', lineHeight: 1.1, fontWeight: '700' }}>
                      {rank.title}
                    </h3>
                    <p style={{ color: 'var(--gray)', fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: '1.7', margin: 0 }}>
                      {rank.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation */}
            <div className="custom-rank-nav">
              <div className="custom-rank-btn rank-prev">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </div>
              <div className="custom-rank-pagination" style={{ display: 'flex', alignItems: 'center' }}></div>
              <div className="custom-rank-btn rank-next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Ranking;
