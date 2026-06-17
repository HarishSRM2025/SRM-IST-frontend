import React from 'react';
import { FaCheckCircle, FaGlobe, FaMedal, FaStar, FaTrophy, FaUsers } from 'react-icons/fa';
import { HItem, SectionHeading, StatBadge } from './Shared';

const OverviewSection = ({ image }) => (
  <section className="cl-sec">
    <div className="cl-container">
      <SectionHeading label="Overview" prefix="Campus" highlight="Life & Culture" />
      <div className="cl-hero-grid">
        <div className="cl-hero-img">
          <img src={image} alt="SRM Campus" loading="lazy" />
          <div className="cl-img-badge">
            <FaStar /><span>Est. 2021</span>
          </div>
        </div>
        <div className="cl-hero-body">
          <p className="cl-lead">
            SRM IST Tiruchirappalli offers a vibrant campus where academic excellence, lasting
            friendships, cultural exploration, community service, and student wellness come
            together to shape a truly complete student experience.
          </p>
          <div className="cl-stats-row">
            <StatBadge icon={<FaUsers />} value="5000+" label="Students" />
            <StatBadge icon={<FaTrophy />} value="30+" label="Active Clubs" />
            <StatBadge icon={<FaMedal />} value="50+" label="Events / Year" />
            <StatBadge icon={<FaGlobe />} value="15+" label="Countries" />
          </div>
          <ul className="cl-check-list">
            <HItem icon={<FaCheckCircle />} text="Industry-aligned curriculum and research-driven education" />
            <HItem icon={<FaCheckCircle />} text="World-class sports, cultural, and recreational facilities" />
            <HItem icon={<FaCheckCircle />} text="Safe, inclusive campus with 24/7 support systems" />
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default OverviewSection;
