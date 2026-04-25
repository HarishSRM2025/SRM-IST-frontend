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
          <a href="#" title="Facebook"><FaFacebookF /></a>
          <a href="#" title="Instagram"><FaInstagram /></a>
          <a href="#" title="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" title="YouTube"><IoLogoYoutube /></a>
        </div>

        <span className="tb-lang">
          <FaGlobe /> EN
        </span>
      </div>

    </div>
  );
};

export default Topbar;