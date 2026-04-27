import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";

const VideoTestimonial = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const videos = [
    {
      name: "Ananya Krishnan",
      role: "B.Tech CSE 2023 · Placed at TCS",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      video: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
      text: "SRM Trichy transformed my career trajectory completely."
    },
    {
      name: "Vikram Subramanian",
      role: "B.Tech ECE 2024 · Placed at Infosys",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
      video: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
      text: "The faculty pushed me to discover my true potential."
    },
    {
      name: "Meena Rajendran",
      role: "MBA 2023 · Placed at Deloitte",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      video: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
      text: "From a small town to a global company — SRM made it possible."
    },
    {
      name: "Suresh Balaji",
      role: "B.Tech Mech 2024 · Placed at Bosch",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      video: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
      text: "Industry visits gave me real-world confidence."
    }
  ];

  return (
    <div className="video-section">
      <div className="wrap">

        {/* Header */}
        <div className="rev">
          <span className="s-tag">Student Stories</span>
          <h2 className="s-title">
            Hear It From <em>Our Students</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 5000 }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {videos.map((v, i) => (
            <SwiperSlide key={i}>
              <div
                className="vc"
                onClick={() => setVideoUrl(v.video)}
              >
                <div className="vc-thumb">
                  <img src={v.img} alt={v.name} />
                  <div className="vc-play">
                    <FaPlay />
                  </div>
                </div>

                <div className="vc-info">
                  <div className="vc-name">{v.name}</div>
                  <div className="vc-role">{v.role}</div>
                  <div className="vc-blurb">"{v.text}"</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {videoUrl && (
          <div className="v-modal open" onClick={() => setVideoUrl(null)}>
            <div className="v-modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="v-close" onClick={() => setVideoUrl(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                src={videoUrl}
                title="Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default VideoTestimonial;