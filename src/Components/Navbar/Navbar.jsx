import React, { useEffect, useState } from "react";
import { FaChevronDown, FaInfoCircle, FaEye, FaUsers, FaMedal, FaLandmark, FaGraduationCap, FaBriefcase, FaFlask, FaBookOpen, FaChartLine, FaBuilding, FaCompass, FaHome, FaDumbbell, FaMusic, FaBook, FaPaperPlane } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMob, setActiveMob] = useState(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer opens
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMobToggle = (id) => {
    setActiveMob(activeMob === id ? null : id);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setActiveMob(null);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <Link to="/" className="nav-logo">
          <div className="nav-logo-badge">
            <img src={logo} alt="SRM IST Logo" height="70px" />
          </div>
          
        </Link>

        <ul className="nav-links">
          {/* About */}
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">
              About <FaChevronDown className="chev" />
            </Link>
            <div className="nav-drop">
              <Link to="/about"><FaInfoCircle />Overview</Link>
              <Link to="/about"><FaEye />Vision & Mission</Link>
              <Link to="/about"><FaUsers />Leadership</Link>
              <hr />
              <Link to="/about"><FaMedal />NAAC</Link>
              <Link to="/about"><FaLandmark />Infrastructure</Link>
            </div>
          </li>

          {/* Academics */}
          <li>
            <a href="#academics">
              Academics <FaChevronDown className="chev" />
            </a>
            <div className="nav-drop">
              <Link to="/institution" state={{ instName: "Engineering & Technology" }}><FaGraduationCap />Engineering & Technology</Link>
              <Link to="/institution" state={{ instName: "College of Management" }}><FaGraduationCap />College of Management </Link>
              <Link to="/institution" state={{ instName: "Science & Humanities" }}><FaGraduationCap />Science & Humanities</Link>
              <Link to="/institution" state={{ instName: "Institute of Hotel Management" }}><FaGraduationCap />Institute of Hotel Management</Link>
              <Link to="/institution" state={{ instName: "College of Physiotherapy" }}><FaGraduationCap />College of Physiotherapy</Link>
              <Link to="/institution" state={{ instName: "College of Occupational Therapy" }}><FaGraduationCap />College of Occupational Therapy</Link>
              <Link to="/institution" state={{ instName: "College of Allied Health Sciences" }}><FaGraduationCap />College of Allied Health Sciences</Link>
            </div>
          </li>

          {/* Placement */}
          <li>
            <Link to='/placement'>
              Placement <FaChevronDown className="chev" />
            </Link>
            <div className="nav-drop">
              <a href="#placement"><FaChartLine />Statistics</a>
              <a href="#placement"><FaBuilding />Recruiters</a>
              <a href="#placement"><FaCompass />Guidance</a>
            </div>
          </li>

          {/* Campus */}
          <li>
            <Link to="/campus-life">
              Campus <FaChevronDown className="chev" />
            </Link>
            <div className="nav-drop">
              <Link to="/campus-life#accommodation"><FaHome />Hostels</Link>
              <Link to="/campus-life#art-culture"><FaMusic />Events</Link>
              <Link to="/campus-life#central-library"><FaBook />Library</Link>
              <Link to="/campus-life#transport"><FaCompass />Transport</Link>
            </div>
          </li>
          <li>
            <Link to='/research'>Research <FaChevronDown className="chev" /></Link>
            <div className="nav-drop">
              <Link to='/sponsored-research'><FaMoneyBillTransfer />Sponsored Research</Link>
            </div>
          </li>
          <li><Link to="/international-relations">International Affairs</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/news-and-events">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/contact" className="nav-cta-link">
              <FaPaperPlane /> Admissions 2026
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-cta-link" style={{  marginLeft: '10px' }}>
              <FaMoneyBillTransfer /> Fee Payment
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${drawerOpen ? "open" : ""}`}
          onClick={toggleDrawer}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div id="mob-drawer" className={drawerOpen ? "open" : ""}>
        <div className="mob-list">

          {/* About */}
          <div className="mob-row">
            <div
              className={`mob-trigger ${activeMob === "about" ? "open" : ""}`}
              onClick={() => handleMobToggle("about")}
            >
              About <FaChevronDown />
            </div>
            <div
              className="mob-sub"
              style={{
                maxHeight: activeMob === "about" ? "200px" : "0px",
              }}
            >
              <Link to="/about" onClick={closeDrawer}>Overview</Link>
              <Link to="/about" onClick={closeDrawer}>Vision</Link>
              <Link to="/about" onClick={closeDrawer}>NAAC</Link>
            </div>
          </div>

          {/* Academics */}
          <div className="mob-row">
            <div
              className={`mob-trigger ${activeMob === "ac" ? "open" : ""}`}
              onClick={() => handleMobToggle("ac")}
            >
              Academics <FaChevronDown />
            </div>
            <div
              className="mob-sub"
              style={{
                maxHeight: activeMob === "ac" ? "250px" : "0px",
              }}
            >
              <Link to="/departments" onClick={closeDrawer}>Departments</Link>
            </div>
          </div>

          {/* Links */}
          <Link className="mob-plain-link" to="/international-relations" onClick={closeDrawer}>International Affairs</Link>
          <Link className="mob-plain-link" to="/students" onClick={closeDrawer}>Students</Link>
          <Link className="mob-plain-link" to="/news-and-events" onClick={closeDrawer}>News</Link>
          <Link className="mob-plain-link" to="/contact" onClick={closeDrawer}>Contact</Link>

          <Link className="mob-cta" to="/contact" onClick={closeDrawer}>
            Apply Now →
          </Link>
          <Link className="mob-cta" to="/contact" onClick={closeDrawer} style={{ backgroundColor: '#2ecc71', color: '#fff', marginTop: '10px' }}>
            Fee Payment →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;