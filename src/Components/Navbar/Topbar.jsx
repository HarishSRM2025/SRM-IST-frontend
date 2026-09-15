import AnnouncementCategories from './AnnouncementCategories';
import React, { useState } from 'react';
import { FaChevronDown, FaFacebookF} from "react-icons/fa";
import { FaInstagram, FaLinkedinIn,FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const Topbar = ({ announcements = [], categories = [], categoryAnnouncements = [] }) => {
  const [isAnnouncementsOpen, setIsAnnouncementsOpen] = useState(false);

  return (
    <div id="topbar" className="dark-topbar">

      {/* Announcements Button */}
      <button type="button" aria-expanded={isAnnouncementsOpen}
        className={`tb-announcements-btn ${isAnnouncementsOpen ? 'active' : ''}`}
        onClick={() => setIsAnnouncementsOpen(!isAnnouncementsOpen)}
      >
        <HiOutlineSpeakerphone className="tb-a-icon" /> 
        Announcements 
        {isAnnouncementsOpen ? <MdClose className="tb-a-icon-right" /> : <FaChevronDown className="tb-a-icon-right" />}
      </button>

      {/* Marquee */}
      <div className="tb-marquee">
        <marquee 
          behavior="scroll" 
          direction="left" 
          scrollamount="5"
          onMouseOver={(e) => e.currentTarget.stop()}
          onMouseOut={(e) => e.currentTarget.start()}
        >
          {announcements.slice(0, 3).map(ann => (
            <span className="marquee-item" key={ann._id}>
              <a href={ann.source_type === 'event' ? `/event/${ann.event_id}` : ann.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{ann.title}</a>
            </span>
          ))}
        </marquee>
      </div>

      {/* Right */}
      <div className="tb-right">
        <div className="tb-social">
          <a href="https://x.com/srmist_trichy" target='_blank' title="twitter" style={{ color: '#000000' }}><FaXTwitter /></a>
          <a href="http://facebook.com/srmist.trichy" target='_blank' title="Facebook" style={{ color: '#1877F2' }}><FaFacebookF /></a>
          <a href="https://www.instagram.com/accounts/login/?next=%2Fsrmist.trichy%2F&source=omni_redirect" target='_blank' title="Instagram" style={{ color: '#E4405F' }}><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/srm-institute-of-science-and-technology-tiruchirappalli/" target='_blank' title="LinkedIn" style={{ color: '#0A66C2' }}><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/channel/UCDqMZI1OZsPB7bDhiX_mErw" target='_blank' title="YouTube" style={{ color: '#FF0000' }}><IoLogoYoutube /></a>
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
            <button aria-label="Close announcements" className="announcements-close" onClick={() => setIsAnnouncementsOpen(false)}>
              <MdClose />
            </button>
          </div>
          
          <div className="announcements-content">
            <AnnouncementCategories categories={categories} announcements={categoryAnnouncements} onNavigate={() => setIsAnnouncementsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Topbar;
