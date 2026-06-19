import React from 'react';
import { FaBook, FaBookOpen, FaFlask, FaSearch, FaWifi } from 'react-icons/fa';
import { Pill, SectionHeading } from './Shared';

const CentralLibrarySection = ({ image }) => (
  <section className="cl-sec cl-sec--light">
    <div className="cl-container">
      <SectionHeading label="Resources" prefix="Central" highlight="Library" />
      <div className="cl-split cl-split--flip">
        <div className="cl-split__img">
          <img src={image} alt="Library" loading="lazy" />
          <div className="cl-img-tag cl-img-tag--gold"><FaBook /> Knowledge Hub</div>
        </div>
        <div className="cl-split__body">
          <p className="cl-lead">
            A knowledge powerhouse with thousands of volumes, peer-reviewed journals, digital
            databases, and research zones - inspiring deep academic inquiry.
          </p>
          <div className="cl-lib-stats">
            <div className="cl-lib-stat">
              <FaBookOpen className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">50,000+</div>
              <div className="cl-lib-stat__lbl">Books & Journals</div>
            </div>
            <div className="cl-lib-stat">
              <FaWifi className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">24 / 7</div>
              <div className="cl-lib-stat__lbl">Digital Access</div>
            </div>
            <div className="cl-lib-stat">
              <FaSearch className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">10+</div>
              <div className="cl-lib-stat__lbl">Research Zones</div>
            </div>
          </div>
          <div className="cl-pills-row">
            <Pill icon={<FaBookOpen />} label="Silent Reading Bays" />
            <Pill icon={<FaFlask />} label="Research Support" />
            <Pill icon={<FaWifi />} label="e-Resources" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CentralLibrarySection;
