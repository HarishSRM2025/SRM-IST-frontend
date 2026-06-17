import React from 'react';
import { FaDrum, FaMusic, FaPaintBrush, FaStar, FaTheaterMasks } from 'react-icons/fa';
import { SectionHeading } from './Shared';

const artEvents = [
  { icon: <FaMusic />, name: 'Music Fests', desc: 'Carnatic, fusion & western concerts throughout the year.' },
  { icon: <FaTheaterMasks />, name: 'Theatre', desc: 'Annual drama productions, street plays & improv shows.' },
  { icon: <FaDrum />, name: 'Dance', desc: 'Classical, folk, and contemporary performances on campus.' },
  { icon: <FaPaintBrush />, name: 'Fine Arts', desc: 'Exhibitions, murals, pottery workshops & design showcases.' },
];

const ArtCultureSection = ({ image }) => (
  <section className="cl-sec cl-sec--navy">
    <div className="cl-container">
      <SectionHeading label="Creativity" prefix="Art &" highlight="Culture" />
      <div className="cl-split cl-split--flip">
        <div className="cl-split__img">
          <img src={image} alt="Art and Culture" loading="lazy" />
          <div className="cl-img-tag cl-img-tag--gold"><FaStar /> Cultural Hub</div>
        </div>
        <div className="cl-split__body">
          <p className="cl-lead cl-lead--light">
            A rich tapestry of music, dance, theatre, and visual arts thrives on campus -
            giving every student a creative outlet and a stage to shine.
          </p>
          <div className="cl-event-cards">
            {artEvents.map(e => (
              <div className="cl-event-card" key={e.name}>
                <div className="cl-event-card__icon">{e.icon}</div>
                <div>
                  <div className="cl-event-card__name">{e.name}</div>
                  <div className="cl-event-card__desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ArtCultureSection;
