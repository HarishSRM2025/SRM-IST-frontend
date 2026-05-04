import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaChevronDown, FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const Topbar = () => {
  const [isAnnouncementsOpen, setIsAnnouncementsOpen] = useState(false);

  return (
    <div id="topbar" className="dark-topbar">

      {/* Announcements Button */}
      <div 
        className={`tb-announcements-btn ${isAnnouncementsOpen ? 'active' : ''}`}
        onClick={() => setIsAnnouncementsOpen(!isAnnouncementsOpen)}
      >
        <HiOutlineSpeakerphone className="tb-a-icon" /> 
        Announcements 
        {isAnnouncementsOpen ? <MdClose className="tb-a-icon-right" /> : <FaChevronDown className="tb-a-icon-right" />}
      </div>

      {/* Marquee */}
      <div className="tb-marquee">
        <marquee 
          behavior="scroll" 
          direction="left" 
          scrollamount="5"
          onMouseOver={(e) => e.currentTarget.stop()}
          onMouseOut={(e) => e.currentTarget.start()}
        >
          <span className="marquee-item">Application Open for UG / PG / UG NRI / Foreign/ Research Programmes 2026 – 27 – Apply Now</span>
          <span className="marquee-item">SRMJEEE 2026 – Admit Card Download</span>
          <span className="marquee-item">B.Tech Foreign 2026 (July session) – Apply Now</span>
        </marquee>
      </div>

      {/* Right */}
      <div className="tb-right">
        <div className="tb-social">
          <a href="#" title="Facebook" style={{ color: '#1877F2' }}><FaFacebookF /></a>
          <a href="#" title="Instagram" style={{ color: '#E4405F' }}><FaInstagram /></a>
          <a href="#" title="LinkedIn" style={{ color: '#0A66C2' }}><FaLinkedinIn /></a>
          <a href="#" title="YouTube" style={{ color: '#FF0000' }}><IoLogoYoutube /></a>
        </div>
      </div>

      {/* Announcements Dropdown Panel */}
      {isAnnouncementsOpen && (
        <div className="announcements-dropdown">
          <div className="announcements-header-top">
            <div className="announcements-header-title">
              <HiOutlineSpeakerphone className="announcement-icon" />
              <h2>Announcements</h2>
            </div>
            <button className="announcements-close" onClick={() => setIsAnnouncementsOpen(false)}>
              <MdClose />
            </button>
          </div>
          
          <div className="announcements-content">
            <Link to="#" className="announcement-link top-link">
              <FaArrowCircleRight className="a-arrow" />
              <span>Application Open for UG / PG / UG NRI / Foreign/ Research Programmes 2026 – 27 – Apply Now</span>
            </Link>

            <div className="announcement-category">
              <h3 className="category-title">Admission Open</h3>
              <ul className="category-list">
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> Undergraduate Programmes 2026</Link></li>
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> Postgraduate Programmes 2026</Link></li>
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> Ph.D. Admissions 2026</Link></li>
              </ul>
            </div>

            <div className="announcement-category">
              <h3 className="category-title">Hiring</h3>
              <ul className="category-list">
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> Faculty Positions (Multiple Departments)</Link></li>
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> Non-Teaching Staff Vacancies</Link></li>
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> Research Assistant Opportunities</Link></li>
              </ul>
            </div>

            <div className="announcement-category">
              <h3 className="category-title">Upcoming Event</h3>
              <ul className="category-list">
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> International Conference on Emerging Technologies</Link></li>
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> Annual Tech Fest 2026</Link></li>
                <li><Link to="#"><FaArrowCircleRight className="a-arrow" /> Alumni Meet & Greet</Link></li>
              </ul>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
};

export default Topbar;