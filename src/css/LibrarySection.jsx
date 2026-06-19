import React from 'react';
import { FaBook, FaCheckCircle, FaLaptop, FaSearch } from 'react-icons/fa';
import { HItem, SectionHeading } from './Shared';

const LibrarySection = ({ image }) => (
  <section className="cl-sec cl-sec--cream" id="library">
    <div className="cl-container">
      <SectionHeading label="Learning Resources" prefix="Central" highlight="Library" />
      <div className="cl-split">
        <div className="cl-split__img">
          <img src={image} alt="Central Library" loading="lazy" />
          <div className="cl-img-tag cl-img-tag--gold">
            <FaBook /><span>Knowledge Hub</span>
          </div>
        </div>
        <div className="cl-split__body">
          <p className="cl-lead">
            The Central Library is a sophisticated repository of knowledge, providing access to
            extensive digital and print resources to support academic excellence and research.
          </p>
          <div className="cl-lib-stats">
            <div className="cl-lib-stat">
              <FaBook className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">18,100+</div>
              <div className="cl-lib-stat__lbl">Volumes</div>
            </div>
            <div className="cl-lib-stat">
              <FaLaptop className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">E-Resources</div>
              <div className="cl-lib-stat__lbl">Digital Access</div>
            </div>
            <div className="cl-lib-stat">
              <FaSearch className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">KOHA</div>
              <div className="cl-lib-stat__lbl">LMS System</div>
            </div>
          </div>
          <ul className="cl-check-list">
            <HItem icon={<FaCheckCircle />} text="Fully Air-Conditioned reading halls and study areas" />
            <HItem icon={<FaCheckCircle />} text="RFID based Library Management System for seamless access" />
            <HItem icon={<FaCheckCircle />} text="Access to global research databases and journals" />
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default LibrarySection;