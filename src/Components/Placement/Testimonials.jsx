import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import vid1 from '../../assets/video/placement_feedback/IMG_5272.MP4';
import vid2 from '../../assets/video/placement_feedback/IMG_5274.MP4';
import vid3 from '../../assets/video/placement_feedback/IMG_5275.MP4';

import img1 from '../../assets/images/placement/1.png';
import img2 from '../../assets/images/placement/2.png';
import img3 from '../../assets/images/placement/3.png';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      name: "Sri Anusha B",
      role: "Graduate Trainee, XYZ Ltd",
      img: img1,
      url: vid1
    },
    {
      name: "Rahul Sharma",
      role: "Software Engineer, Amazon",
      img: img2,
      url: vid2
    },
    {
      name: "Priya Raj",
      role: "Data Analyst, Optum",
      img:   img3,
      url: vid3
    }
  ];

  return (
    <>
      <section className="pl-section pl-bg-navy pl-video-sec">
        <div className="wrap">
          <span className="s-tag" style={{ color: 'var(--white)', opacity: '0.7' }}>ALUMNI</span>
          <h2 className="s-title light">Voices of Our <em>Students</em></h2>
          <div className="gold-bar"></div>
          
          <div style={{ marginTop: '48px' }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              navigation
              pagination={{ clickable: true }}
              className="pl-video-swiper"
            >
              {videos.map((vid, index) => (
                <SwiperSlide key={index}>
                  <div className="vc" onClick={() => setActiveVideo(vid.url)}>
                    <div className="vc-thumb">
                      <img src={vid.img} alt={vid.name} />
                      <div className="vc-play">
                        <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </div>
                    </div>
                    <div className="vc-info">
                      <div className="vc-name">{vid.name}</div>
                      <div className="vc-role">{vid.role}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL using global styles */}
      <div className={`v-modal ${activeVideo ? 'open' : ''}`} onClick={() => setActiveVideo(null)}>
        <div className="v-modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="v-close" onClick={() => setActiveVideo(null)}>
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          {activeVideo && (
            <video 
               src={activeVideo} 
               controls
               autoPlay
               style={{ 
                 maxWidth: '100%', 
                 maxHeight: '80vh', 
                 outline: 'none', 
                 backgroundColor: '#000',
                 display: 'block',
                 margin: '0 auto'
               }}
            ></video>
          )}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
