import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

const Recruiters = () => {
  const companies = [
    "Amazon", "Afcons", "Altisource", "Akamai", 
    "Optum", "Oracle", "PayPal", "Philips",
    "TCS", "Infosys", "Wipro", "Cognizant",
    "IBM", "Cisco", "Deloitte", "Accenture",
    "Microsoft", "Google", "Intel", "Adobe"
  ];

  return (
    <section className="pl-section pl-bg-cream">
      <div className="wrap">
        <span className="s-tag">TOP RECRUITERS</span>
        <h2 className="s-title">Glimpse of Our <em>Recruiters</em></h2>
        <div className="gold-bar"></div>
        
        <div className='recruiter-sec' style={{ marginTop: '48px', position: 'relative' }}>
          <Swiper
            modules={[Autoplay, Navigation, Grid]}
            slidesPerView={1}
            grid={{
              rows: 2,
              fill: 'row',
            }}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, grid: { rows: 2, fill: 'row'} },
              1024: { slidesPerView: 4, grid: { rows: 2, fill: 'row'} }
            }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pl-recruit-swiper"
            style={{ padding: '20px 40px' }} // Padding for arrows
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="pl-recruit-logo" style={{ margin: '0' }}>
                  {company}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
