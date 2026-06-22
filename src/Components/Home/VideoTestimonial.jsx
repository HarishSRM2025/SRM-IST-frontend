import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";

const VideoTestimonial = () => {
  const [videoId, setVideoId] = useState(null);

  // Use YouTube video IDs and show YouTube thumbnails so all slides are same size
  const videos = [
    {
      name: "",
      role: "",
      video: "_G98tu5Ik-M",
      text: ""
    },
    {
      name: "",
      role: "",
      video: "QDw-a9Z6Z7M",
      text: ""
    },
    {
      name: "",
      role: "",
      video: "-d3xEdbQ7Z4",
      text: ""
    },
    {
      name: "",
      role: "",
      video: "7tUS9L6ABDw",
      text: ""
    },
    {
      name: "",
      role: "",
      video: "Bxo2ANs9vBU",
      text: ""
    },
    {
      name: "",
      role: "",
      video: "B2gPMOT-E0M",
      text: ""
    },
    {
      name: "",
      role: "",
      video: "LIBC9SPOdBE",
      text: ""
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
              <div className="vc" onClick={() => setVideoId(v.video)}>
                <div className="vc-thumb">
                  <img
                    src={`https://img.youtube.com/vi/${v.video}/hqdefault.jpg`}
                    alt={v.name}
                  />

                  {/* centered Shorts-style icon overlay */}
                  <div className="shorts-overlay" aria-hidden>
                    <div className="shorts-badge">
                      <svg width="174" height="64" viewBox="0 0 44 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="54" height="64" rx="8" fill="#FF0000" />
                        <polygon points="18,20 18,44 38,32" fill="#fff" />
                      </svg>
                    </div>
                  </div>

                </div>

                {/* <div className="vc-info">
                  <div className="vc-name">{v.name}</div>
                  <div className="vc-role">{v.role}</div>
                  <div className="vc-blurb">"{v.text}"</div>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {videoId && (
          <div className="v-modal open" onClick={() => setVideoId(null)}>
            <div className="v-modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="v-close" onClick={() => setVideoId(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Inline styles to keep thumbnails consistent and place Shorts icon */}
        <style>{`\
          .vc-thumb{ position:relative; width:100%; aspect-ratio:16/9; overflow:hidden; border-radius:8px; }\
          .vc-thumb img{ width:100%; height:100%; object-fit:cover; display:block; }\
          .shorts-overlay{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none }\
          .shorts-badge{ opacity:0.95; transform:scale(1); }\
          .vc{ cursor:pointer; }\
          .v-modal.open{ position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.7); z-index:9999 }\
          .v-modal-box{ width:90%; max-width:960px; aspect-ratio:16/9; background:#000; position:relative }\
          .v-modal-box iframe{ width:100%; height:100% }\
          .v-close{ position:absolute; right:12px; top:12px; background:transparent; border:0; color:#fff; z-index:2 }\
        `}</style>

      </div>
    </div>
  );
};

export default VideoTestimonial;