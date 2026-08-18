import React from 'react';
import {
  FaChessKnight,
  FaDumbbell,
  FaFutbol,
  FaMedal,
  FaRunning,
  FaSwimmer,
  FaTableTennis,
  FaTrophy,
} from 'react-icons/fa';
import { Pill, SectionHeading } from './Shared';

const sportsList = [
  { icon: <FaFutbol />, name: 'Football' },
  { icon: <FaSwimmer />, name: 'Swimming' },
  { icon: <FaTableTennis />, name: 'Table Tennis' },
  { icon: <FaRunning />, name: 'Athletics' },
  { icon: <FaChessKnight />, name: 'Chess' },
  { icon: <FaTrophy />, name: 'Tournaments' },
];

const SportsSection = ({ image }) => (
  <section className="cl-sec cl-sec--cream" id="sports">
    <div className="cl-container">
      <SectionHeading label="Fitness & Recreation" prefix="Sports &" highlight="Athletics" />
      <div className="cl-split">
        <div className="cl-split__body">
          <p className="cl-lead">
            State-of-the-art sports infrastructure fuels champions at SRM. From inter-collegiate
            tournaments to expert coaching, our facilities build discipline, teamwork, and resilience.
          </p>
          <div className="cl-sport-grid">
            {sportsList.map(s => (
              <div className="cl-sport-tile" key={s.name}>
                <div className="cl-sport-tile__icon">{s.icon}</div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
          <div className="cl-pills-row">
            <Pill icon={<FaMedal />} label="Inter-collegiate Meets" />
            <Pill icon={<FaTrophy />} label="Expert Coaching" />
            <Pill icon={<FaDumbbell />} label="Modern Gym" />
          </div>
        </div>
        <div className="cl-split__img">
          <img src={image} alt="Sports" loading="lazy" />
          <div className="cl-img-tag cl-img-tag--navy"><FaTrophy /> Champions</div>
        </div>
      </div>
    </div>
  </section>
);

export default SportsSection;
