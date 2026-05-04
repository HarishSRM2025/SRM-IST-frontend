import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const AluminiVoice = () => {
  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Software Engineer, Amazon · CSE 2024",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      text: "SRM Trichy gave me the perfect launchpad. The faculty mentorship, lab facilities, and placement support were world-class."
    },
    {
      name: "Priya Nair",
      role: "Ph.D. Scholar, IIT Madras · ECE 2023",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      text: "The research culture here is incredible. My faculty mentors pushed me to publish during my third year."
    },
    {
      name: "Karthik Rajan",
      role: "Co-Founder, TechPilot · MBA 2022",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      text: "Clubs, hackathons, and events make campus life vibrant. I built my startup idea here."
    },
    {
      name: "Deepika Suresh",
      role: "Product Manager, Google · IT 2023",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      text: "Placement cell prepared us early. I secured my dream role at Google."
    },
    {
      name: "Rahul Menon",
      role: "Data Scientist, Deloitte · CSE 2024",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      text: "Infrastructure and lab facilities are unmatched. Real-world exposure was excellent."
    }
  ];

  return (
    <div className="testi-section">
      <div className="wrap">

        {/* Header */}
        <div className="rev" style={{ textAlign: "center" }}>
          <span className="s-tag">Alumni Success</span>
          <h2 className="s-title" style={{color:'#0c4da2'}}>
            Voices of Our <em>Alumni</em>
          </h2>
          <div className="gold-bar" style={{ margin: "0 auto 40px" }}></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="tc">
                <span className="tc-quote">"</span>

                <div className="tc-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="tc-text">{t.text}</p>

                <div className="tc-author">
                  <img className="tc-avatar" src={t.img} alt={t.name} />
                  <div>
                    <div className="tc-name">{t.name}</div>
                    <div className="tc-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default AluminiVoice;