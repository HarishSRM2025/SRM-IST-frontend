import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      name: "Sri Anusha B",
      role: "Graduate Trainee, XYZ Ltd",
      img: "https://via.placeholder.com/800x450?text=Video+1",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example YT Embed
    },
    {
      name: "Rahul Sharma",
      role: "Software Engineer, Amazon",
      img: "https://via.placeholder.com/800x450?text=Video+2",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY" // Example YT Embed
    },
    {
      name: "Priya Raj",
      role: "Data Analyst, Optum",
      img: "https://via.placeholder.com/800x450?text=Video+3",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "John Doe",
      role: "UI/UX Designer, Adobe",
      img: "https://via.placeholder.com/800x450?text=Video+4",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
      name: "Siva Kumar",
      role: "Frontend Engineer, Akamai",
      img: "https://via.placeholder.com/800x450?text=Video+5",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
            <iframe 
               src={activeVideo} 
               title="Video Player" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
