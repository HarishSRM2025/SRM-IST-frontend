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
           The Central Library serves as the academic heart of SRM IST Trichy, offering a modern,fully air-conditioned learning environment with RFID-enabled services, KOHA Library Management System, and extensive print and digital collections supporting Engineering,Technology, Science, Humanities, Hotel Management, and Allied Health Sciences.
          </p>
          <div className="cl-lib-stats">
            <div className="cl-lib-stat">
              <FaBook className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">19,148</div>
              <div className="cl-lib-stat__lbl">Book Volumes</div>
            </div>

            <div className="cl-lib-stat">
              <FaLaptop className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">34,000+</div>
              <div className="cl-lib-stat__lbl">E-Books & E-Resources</div>
            </div>

            <div className="cl-lib-stat">
              <FaSearch className="cl-lib-stat__icon" />
              <div className="cl-lib-stat__val">3,100+</div>
              <div className="cl-lib-stat__lbl">E-Journals Access</div>
            </div>
          </div>
          <ul className="cl-check-list">
            <HItem
              icon={<FaCheckCircle />}
              text="Fully Air-Conditioned Library with RFID-based automated circulation system"
            />
            <HItem
              icon={<FaCheckCircle />}
              text="Access to 19,148 volumes, 2,949 titles, 75 print journals and 34 magazines"
            />
            <HItem
              icon={<FaCheckCircle />}
              text="Remote access to EBSCO, IEEE, DELNET, D-Space Repository and research support services"
            />
          </ul>
          <div className="cl-actions">
            <a href="/library" className="cl-btn cl-btn-primary">Visit Library</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LibrarySection;