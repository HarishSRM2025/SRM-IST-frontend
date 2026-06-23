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
import { useEffect } from 'react';
import axios from 'axios';

const Ranking = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/about/accreditation/getall`
      )
      .then((res) => setRankings(res.data))
      .catch((err) => console.log(err));
  }, []);


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
                <SwiperSlide key={`img-${rank._id}`}>
                  <div style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    background: '#fff',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={'http://localhost:3000/public/uploads/'+rank.image} 
                      alt={rank._id} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block'
                      }} 
                    />
                    {/* Overlay gradient for premium look */}
                    
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
                <SwiperSlide key={`content-${rank._id}`}>
                  <div style={{ padding: '10px 0' }}>
                 
                    <h3 style={{ color: 'var(--navy)', fontSize: 'clamp(32px, 2vw, 48px)', marginBottom: '25px', fontFamily: 'var(--font-serif)', lineHeight: 1.1, fontWeight: '700' }}>
                      {rank.title}
                    </h3>
                    <p style={{ color: 'var(--gray)', fontSize: 'clamp(16px, 1.3vw, 19px)', lineHeight: '1.7', margin: 0 }}>
                      {rank.description}
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
