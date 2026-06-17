import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

const TESTIMONIALS = [
  {
    name: 'Prajwal Rastogi',
    role: 'CSE, FINAL YEAR',
    text: 'I Prajwal Rastogi, RA171003010077, final year CSE student, currently placed in MU-Sigma and Capgemini want to make the following in your knowledge. From the past four years in SRM I had a very pleasant experience. The faculties of CSE and CDC in particular are very co-operative and helpful. I realized the importance of my faculties during my pre final and final year especially during the covid time. CDC faculty were available for me anytime.',
    featured: false
  },
  {
    name: 'Meenu Mariam Jacob',
    role: 'MASTER OF TECHNOLOGY STUDENT FROM THE DEPARTMENT OF CHEMICAL ENGINEERING',
    text: 'I, Meenu M. Jacob (RA1812012010001), Master of Technology student from the Department of Chemical Engineering, SRM Institute of Science and Technology batch of 2018 to 2020. I had the privilege to be a part of your cohort in the year 2019, as part of the classes conducted by the Career Development Center. I would also like to thank the Career Development Center and the Head of the CDC. Everyone who remembers his own education remembers teachers, not methods and techniques. The teacher is the heart of the educational system.',
    featured: false
  },
  {
    name: 'Aditya Arjun',
    role: 'DEPARTMENT OF MECHANICAL ENGINEERING',
    text: 'This is Aditya Arjun (RA1811002010165) from 2022 batch. During my four-year course in SRM as a student of mechanical engineering, I have gained a lot of knowledge whether it is about handling machinery or knowing how things are assembled, programmed and put into work or about dealing with problems, responsibilities and challenges that we are going to face in our lives. As we are entering into a professional world, I would like to thank the CDC for their guidance and support.',
    featured: false
  },
  {
    name: 'Priya Sharma',
    role: 'ELECTRONICS AND COMMUNICATION ENGINEERING',
    text: 'I am grateful for the comprehensive training and support provided by the Career Development Center. The workshops and mock interviews helped me build confidence and develop essential professional skills. The faculty members were always approachable and provided valuable guidance throughout my placement journey. Their dedication and commitment to student success is truly commendable.',
    featured: false
  },
  {
    name: 'Rahul Kumar',
    role: 'INFORMATION TECHNOLOGY',
    text: 'The Career Development Center has been instrumental in shaping my professional career. The soft skills training, technical workshops, and industry interaction sessions provided invaluable insights. The placement team worked tirelessly to ensure every student got the best opportunities. I am thankful for their continuous support and mentorship throughout my academic journey at SRM.',
    featured: false
  },
  {
    name: 'Sneha Reddy',
    role: 'CIVIL ENGINEERING',
    text: 'My experience with the CDC has been exceptional. From resume building workshops to aptitude training sessions, every program was well-structured and beneficial. The faculty dedication to helping students achieve their career goals is remarkable. The support I received during the placement process was beyond expectations. Thank you CDC for making my dreams come true.',
    featured: false
  }
];

const Testimonials = () => {
  return (
    <section className="cdc-section rev">
      <div className="wrap">
        <div style={{ textAlign: 'center' }}>
          <span className="s-tag" style={{ display: 'block', width: 'max-content', margin: '0 auto 25px' }}>Student Voices</span>
          <h2 className="s-title">
            Alumni <em>Testimonials</em>
          </h2>
          <div className="gold-bar" style={{ margin: '0 auto 40px' }} />
        </div>

        <div className="cdc-testimonials-wrapper" style={{ position: 'relative' }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            className="cdc-testi-swiper"
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.cdc-testi-next',
              prevEl: '.cdc-testi-prev'
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1.8,
                centeredSlides: true,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 40
              }
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <SwiperSlide key={idx}>
                <article className={`cdc-testi-card ${t.featured ? 'featured' : ''}`}>
                  <span className="cdc-testi-quote">&ldquo;</span>
                  <p className="cdc-testi-text">{t.text}</p>
                  <div className="cdc-testi-author">
                    <div className="cdc-testi-name">{t.name}</div>
                    <div className="cdc-testi-role">{t.role}</div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='cdc-testimonials-swiper-btn'>
            {/* Custom Carousel Navigation buttons */}
          <button className="cdc-testi-prev swiper-button-prev cdc-swiper-nav-btn prev">
            <FaChevronLeft style={{ color: 'var(--gold)', fontSize: '10px' }} />
          </button>
          <button className="cdc-testi-next swiper-button-next cdc-swiper-nav-btn next">
            <FaChevronRight style={{ color: 'var(--gold)', fontSize: '10px' }} />
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
