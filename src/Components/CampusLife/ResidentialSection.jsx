import React from 'react';
import {
  FaBed,
  FaBook,
  FaBuilding,
  FaConciergeBell,
  FaDumbbell,
  FaGlobe,
  FaHeart,
  FaLock,
  FaMapMarked,
  FaStar,
  FaUserShield,
  FaUsers,
  FaUtensils,
  FaWifi,
} from 'react-icons/fa';
import { SectionHeading } from './Shared';

const hostelData = [
  {
    icon: <FaBed />,
    title: "Girls' Hostel",
    tag: 'Residential - Women',
    dark: false,
    features: [
      { icon: <FaUserShield />, label: 'Lady wardens on-site 24/7' },
      { icon: <FaLock />, label: 'Biometric-secured premises' },
      { icon: <FaUtensils />, label: 'Hygienic mess with varied menu' },
      { icon: <FaWifi />, label: 'High-speed Wi-Fi throughout' },
    ],
  },
  {
    icon: <FaBed />,
    title: "Boys' Hostel",
    tag: 'Residential - Men',
    dark: false,
    features: [
      { icon: <FaBook />, label: 'Dedicated quiet study rooms' },
      { icon: <FaDumbbell />, label: 'In-house gym & recreation' },
      { icon: <FaConciergeBell />, label: 'Warden & housekeeping support' },
      { icon: <FaWifi />, label: 'High-speed Wi-Fi throughout' },
    ],
  },
  {
    icon: <FaGlobe />,
    title: 'International Hostel',
    tag: 'Residential - Global',
    dark: false,
    features: [
      { icon: <FaGlobe />, label: 'Multilingual resident support' },
      { icon: <FaStar />, label: 'Premium furnished rooms' },
      { icon: <FaHeart />, label: 'Cross-cultural community' },
      { icon: <FaMapMarked />, label: 'Close to all campus facilities' },
    ],
  },
];

const ResidentialSection = ({ image }) => (
  <section className="cl-sec cl-sec--cream">
    <div className="cl-container">
      <SectionHeading label="Residential Life" prefix="Campus" highlight="Accommodation" />
      <div className="cl-residential-hero">
        <div className="cl-residential-hero__img">
          <img src={image} alt="Hostel" loading="lazy" />
        </div>
        <div className="cl-residential-hero__body">
          <p className="cl-lead cl-lead">
            Purpose-built residential halls provide a secure, comfortable, and community-oriented
            home away from home - with round-the-clock support so students live and thrive.
          </p>
          <div className="cl-activity-grid">
            <div className="cl-club">
              <div className="cl-club__icon"><FaBuilding /></div>
              <div className="cl-club__name">4</div>
              <div className="cl-club__cat">Hostel Blocks</div>
            </div>
            <div className="cl-club">
              <div className="cl-club__icon"><FaUsers /></div>
              <div className="cl-club__name">2000+</div>
              <div className="cl-club__cat">Residents</div>
            </div>
            <div className="cl-club">
              <div className="cl-club__icon"><FaLock /></div>
              <div className="cl-club__name">24/7</div>
              <div className="cl-club__cat">Security</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cl-hostel-grid">
        {hostelData.map(h => (
          <div className={`cl-hostel-card${h.dark ? ' cl-hostel-card--dark' : ''}`} key={h.title}>
            <div className="cl-hostel-card__header">
              <div className="cl-hostel-card__icon">{h.icon}</div>
              <div>
                <div className="cl-hostel-card__tag">{h.tag}</div>
                <div className="cl-hostel-card__title">{h.title}</div>
              </div>
            </div>
            <ul className="cl-hostel-card__features">
              {h.features.map(f => (
                <li key={f.label}>
                  <span className="cl-hostel-feature__icon" aria-hidden="true">{f.icon}</span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResidentialSection;
