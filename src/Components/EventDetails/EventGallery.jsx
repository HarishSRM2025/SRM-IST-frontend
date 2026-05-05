import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventGallery = ({ event }) => {
  if (!event.images || event.images.length === 0) return null;

  return (
    <div style={{ marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <style>
        {`
          .swiper-pagination-bullet {
            background: #ffffffff !important;
            opacity: 0.9 !important;
          }
          .swiper-pagination-bullet-active {
            background: var(--gold) !important;
            opacity: 1 !important;
          }
        `}
      </style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={event.images.length > 1}
        style={{ width: '100%', height: '400px' }}
      >
        {event.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`${event.title} ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventGallery;
