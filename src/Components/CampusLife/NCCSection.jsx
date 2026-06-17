import React from 'react';
import { FaFlag, FaHandshake, FaMedal, FaShieldAlt, FaTrophy, FaUserShield } from 'react-icons/fa';
import { HItem, Pill, SectionHeading } from './Shared';

const NCCSection = ({ image }) => (
  <section className="cl-sec cl-sec--navy">
    <div className="cl-container">
      <SectionHeading label="Discipline & Leadership" prefix="National Cadet" highlight="Corps (NCC)" />
      <div className="cl-split cl-split--flip">
        <div className="cl-split__img">
          <img src={image} alt="NCC" loading="lazy" />
          <div className="cl-img-tag cl-img-tag--gold"><FaFlag /> Service Before Self</div>
        </div>
        <div className="cl-split__body">
          <p className="cl-lead cl-lead--light">
            NCC at SRM builds leaders of integrity through structured military training, adventure
            camps, and community programs - fostering patriotism and lifelong service.
          </p>
          <ul className="cl-check-list cl-check-list--dark">
            <HItem dark icon={<FaShieldAlt />} text="Structured military and physical training programs" />
            <HItem dark icon={<FaMedal />} text="State and national level camp participation" />
            <HItem dark icon={<FaFlag />} text="Republic Day parade and NCC prestigious events" />
            <HItem dark icon={<FaHandshake />} text="Community service and disaster relief activities" />
          </ul>
          <div className="cl-pills-row">
            <Pill dark icon={<FaTrophy />} label="'B' & 'C' Certificates" />
            <Pill dark icon={<FaUserShield />} label="Camp Training" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NCCSection;
