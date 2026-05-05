import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <div className="wrap">

        <div className="ft-top">

          {/* About */}
          <div>
            <div className="ft-logo">SRM IST Trichy</div>
            <p className="ft-desc">
              Shaping future leaders through world-class education, research excellence, and industry collaboration at our Trichy campus.
            </p>

            <div className="ft-social">
              <a className="ft-soc-a" href="#"><FaFacebookF /></a>
              <a className="ft-soc-a" href="#"><FaInstagram /></a>
              <a className="ft-soc-a" href="#"><FaLinkedinIn /></a>
              <a className="ft-soc-a" href="#"><IoLogoYoutube /></a>
            </div>
          </div>

          {/* Academics */}
          <div>
            <div className="ft-col-title">Academics</div>
            <ul className="ft-links">
              <li><a href="#">B.Tech Programs</a></li>
              <li><a href="#">M.Tech Programs</a></li>
              <li><a href="#">MBA / MCA</a></li>
              <li><a href="#">Ph.D Research</a></li>
              <li><a href="#">Online Courses</a></li>
            </ul>
          </div>

          {/* Campus */}
          <div>
            <div className="ft-col-title">Campus</div>
            <ul className="ft-links">
              <li><a href="#">Infrastructure</a></li>
              <li><a href="#">Hostels</a></li>
              <li><a href="#">Sports Facilities</a></li>
              <li><a href="#">Labs &amp; Research</a></li>
              <li><a href="#">Library</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="ft-col-title">Quick Links</div>
            <ul className="ft-links">
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Placements</a></li>
              <li><a href="#">Alumni Network</a></li>
              <li><a href="#">NAAC Accreditation</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="ft-btm">
          <span className="ft-copy">
            © 2026 SRM Institute of Science and Technology, Trichy. All rights reserved.
          </span>
          <span className="ft-copy">
            Privacy Policy · Terms · Sitemap
          </span>
        </div>

      </div>

      {/* Background Text */}
      <div className="ft-bg">SRM IST TRICHY</div>
    </footer>
  );
};

export default Footer;