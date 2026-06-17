import React from 'react';
import { FaArrowRight, FaClock, FaLock, FaMapMarkerAlt } from 'react-icons/fa';
import { Pill, SectionHeading } from './Shared';

const routes = [
  { zone: 'North Zone', buses: '12 Buses', timing: '7:00 AM - 6:30 PM' },
  { zone: 'South Zone', buses: '10 Buses', timing: '7:00 AM - 6:30 PM' },
  { zone: 'East Zone', buses: '8 Buses', timing: '7:15 AM - 6:45 PM' },
];

const TransportSection = ({ image }) => (
  <section className="cl-sec">
    <div className="cl-container">
      <SectionHeading label="Commute" prefix="Campus" highlight="Transport" />
      <div className="cl-split">
        <div className="cl-split__body">
          <p className="cl-lead">
            GPS-tracked buses connect students and staff across the region - safe, punctual,
            and comfortable on well-organised scheduled routes every single day.
          </p>
          <div className="cl-route-list">
            {routes.map(r => (
              <div className="cl-route" key={r.zone}>
                <div className="cl-route__icon"><FaMapMarkerAlt /></div>
                <div className="cl-route__info">
                  <div className="cl-route__zone">{r.zone}</div>
                  <div className="cl-route__meta">{r.buses} | {r.timing}</div>
                </div>
                <FaArrowRight className="cl-route__arrow" />
              </div>
            ))}
          </div>
          <div className="cl-pills-row">
            <Pill icon={<FaMapMarkerAlt />} label="GPS Tracked" />
            <Pill icon={<FaLock />} label="Safe & Reliable" />
            <Pill icon={<FaClock />} label="On Schedule" />
          </div>
        </div>
        <div className="cl-split__img">
          <img src={image} alt="Transport" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default TransportSection;
