import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
const Topbar = () => {
  return (
    <div id="topbar">

      {/* Left */}
      <div className="tb-left">
        <a className="tb-item" href="tel:+914314002000">
          <IoCall /> +91 431 400 2000
        </a>

        <a className="tb-item" href="mailto:admissions@srmtrichy.edu.in">
          <IoMail /> admissions@srmtrichy.edu.in
        </a>

        <span className="tb-item">
          <IoLocationSharp /> Irungalur, Trichy – 621105
        </span>
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

    </div>
  );
};

export default Topbar;