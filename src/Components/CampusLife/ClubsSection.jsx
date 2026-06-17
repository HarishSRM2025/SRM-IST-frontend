import React from 'react';
import { FaCamera, FaFlask, FaHandshake, FaLightbulb, FaMicrophone, FaRobot, FaUsers } from 'react-icons/fa';
import { SectionHeading } from './Shared';

const clubs = [
  { icon: <FaRobot />, name: 'Robotics Club', category: 'Technical' },
  { icon: <FaCamera />, name: 'Photography', category: 'Creative' },
  { icon: <FaMicrophone />, name: 'Debate Society', category: 'Literary' },
  { icon: <FaLightbulb />, name: 'E-Cell', category: 'Entrepreneurship' },
  { icon: <FaFlask />, name: 'Science Club', category: 'Research' },
  { icon: <FaHandshake />, name: 'Social Impact', category: 'Community' },
];

const ClubsSection = ({ image }) => (
  <section className="cl-sec">
    <div className="cl-container">
      <SectionHeading label="Community" prefix="Student" highlight="Clubs & Societies" />
      <div className="cl-split cl-split--flip">
        <div className="cl-split__img">
          <img src={image} alt="Student Clubs" loading="lazy" />
          <div className="cl-img-tag cl-img-tag--gold"><FaUsers /> 30+ Active Clubs</div>
        </div>
        <div className="cl-split__body">
          <p className="cl-lead">
            Over 30 active clubs span technical innovation, entrepreneurship, debate, photography,
            and the arts - every student finds their tribe and builds skills that matter.
          </p>
          <div className="cl-club-grid">
            {clubs.map(c => (
              <div className="cl-club" key={c.name}>
                <div className="cl-club__icon">{c.icon}</div>
                <div className="cl-club__name">{c.name}</div>
                <div className="cl-club__cat">{c.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ClubsSection;
