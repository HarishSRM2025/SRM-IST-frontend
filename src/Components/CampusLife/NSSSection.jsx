import React from 'react';
import { FaBook, FaHeart, FaHospital, FaLeaf, FaTree } from 'react-icons/fa';
import { SectionHeading } from './Shared';

const nssActivities = [
  { icon: <FaLeaf />, title: 'Environmental Drives', desc: 'Tree plantation & campus clean-up campaigns.' },
  { icon: <FaHospital />, title: 'Health Camps', desc: 'Blood donation & medical outreach programs.' },
  { icon: <FaBook />, title: 'Literacy Programs', desc: 'Teaching children in nearby villages.' },
  { icon: <FaTree />, title: 'Rural Outreach', desc: 'Village adoption & community development.' },
];

const NSSSection = ({ image }) => (
  <section className="cl-sec cl-sec--cream">
    <div className="cl-container">
      <SectionHeading label="Service" prefix="National Service" highlight="Scheme (NSS)" />
      <div className="cl-split">
        <div className="cl-split__body">
          <p className="cl-lead">
            NSS empowers students to give back through rural outreach, literacy drives, and
            environmental initiatives - growing into responsible, compassionate citizens.
          </p>
          <div className="cl-activity-grid">
            {nssActivities.map(a => (
              <div className="cl-activity" key={a.title}>
                <div className="cl-activity__icon">{a.icon}</div>
                <div className="cl-activity__title">{a.title}</div>
                <div className="cl-activity__desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="cl-split__img">
          <img src={image} alt="NSS" loading="lazy" />
          <div className="cl-img-tag cl-img-tag--navy"><FaHeart /> Not Me But You</div>
        </div>
      </div>
    </div>
  </section>
);

export default NSSSection;
