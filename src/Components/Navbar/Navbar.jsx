import React, { useEffect, useState } from "react";
import { 
  FaChevronDown, 
  FaInfoCircle, 
  FaEye, 
  FaUsers, 
  FaMedal, 
  FaLandmark, 
  FaGraduationCap, 
  FaBriefcase, 
  FaFlask, 
  FaBookOpen, 
  FaChartLine, 
  FaBuilding, 
  FaCompass, 
  FaHome,
  FaCalendar,
  FaDumbbell, 
  FaMusic, 
  FaBook, 
  FaPaperPlane, 
  FaFileAlt,
  FaTrophy,
  FaLeaf,
  FaArrowCircleRight,
  FaHandsHelping
} from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png";
import mandatory from "../../assets/pdf/mandatory.pdf";


const Navbar = ({ announcements = [] }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMob, setActiveMob] = useState(null);
  const [institutions, setInstitutions] = useState([]);

  const isUpcomingEvent = (item) => {
    const status = String(item.status || '').toLowerCase();
    const eventTime = item.eventDateTime ? new Date(item.eventDateTime).getTime() : NaN;
    return status.includes('upcoming') || (!Number.isNaN(eventTime) && eventTime > Date.now());
  };

  const upcomingAnnouncements = announcements.filter(isUpcomingEvent);
  const groupedAnnouncements = announcements
    .filter((item) => !isUpcomingEvent(item))
    .reduce((acc, item) => {
      const typeLabel = item.type 
        ? item.type.charAt(0).toUpperCase() + item.type.slice(1) 
        : 'Other';
      if (!acc[typeLabel]) {
        acc[typeLabel] = [];
      }
      acc[typeLabel].push(item);
      return acc;
    }, {});

  // Fetch institutions
  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/institution/getall`);
        const json = await res.json();
        if (json.success && json.data) {
          setInstitutions(Array.isArray(json.data) ? json.data : [json.data]);
        }
      } catch (err) {
        console.error("Failed to fetch institutions for navbar", err);
      }
    };
    fetchInstitutions();
  }, []);

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
              <Link to="/governance"><FaUsers />Governance</Link>
              <Link to="/communication"><FaUsers />Communication</Link>
              <Link to="/leadership?filter=all"><FaUsers />Apex Leadership</Link>
              <Link to="/leadership?filter=admin"><FaUsers />Administrative Heads</Link>
              <Link to="/leadership?filter=academic"><FaUsers />Academics Head</Link>
              <a href={mandatory} target="_blank"><FaFileAlt />Mandatory Disclosure</a>
              <Link to="/policy"><FaFileAlt />Policy</Link>
            </div>
          </li>

          {/* Academics */}
          <li>
            <a href="#academics">
              Academics <FaChevronDown className="chev" />
            </a>
            <div className="nav-drop">
               <Link to="/academic_calendar">
                    <FaCalendar />Academic Calendar
              </Link>
              {institutions.length > 0 ? (
                institutions.map((inst, idx) => (
                  <Link key={idx} to="/institution" state={{ instName: inst.name }}>
                    <FaGraduationCap />{inst.name}
                  </Link>
                ))
              ) : (
                <Link to="/institution" state={{ instName: "Engineering & Technology" }}><FaGraduationCap />Engineering & Technology</Link>
              )}
             
            </div>
          </li>

          {/* Placement */}
          <li>
            <Link to='/placement'>
              Placement
            </Link>
          </li>

          {/* Campus */}
          <li>
            <Link to="/campus-life">
              Campus <FaChevronDown className="chev" />
            </Link>
            <div className="nav-drop">
              <Link to="/campus-life#accommodation"><FaHome />Hostels</Link>
              <Link to="/campus-life#art-culture"><FaMusic />Events</Link>
              <Link to="/library"><FaBook />Library</Link>
              <Link to="/sports"><FaTrophy />Sports</Link>
              <Link to="/ncc"><FaLeaf />NCC</Link>
              <Link to="/campus-life#nss"><FaHandsHelping/>NSS</Link>
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
          <li>
            <Link to="/students">
              Students <FaChevronDown className="chev" />
            </Link>
            <div className="nav-drop">
              <Link to="/students"><FaGraduationCap />Students Home</Link>
              <Link to="/examcell"><FaBookOpen />Examcell</Link>
            </div>
          </li>
          <li><Link to="/news-and-events">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/admission" className="nav-cta-link">
              <FaPaperPlane /> Admissions 2026
            </Link>
          </li>
          <li>
            <Link to="https://cubonline.biz/StudentLogin?Instname=SRMT"   target="_blank" className="nav-cta-link" style={{ marginLeft: '10px' }}>
              <FaMoneyBillTransfer /> Fee Payment
            </Link>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="mob-controls">
          {/* Mobile Announcements Icon */}
          <button 
            className="mob-announcements-btn"
            onClick={() => {
              setDrawerOpen(true);
              setActiveMob("announcements");
            }}
            title="Announcements"
            aria-label="Announcements"
          >
            <HiOutlineSpeakerphone />
            <span className="badge"></span>
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${drawerOpen ? "open" : ""}`}
            onClick={toggleDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div id="mob-drawer" className={drawerOpen ? "open" : ""}>
        <div className="mob-list">

          {/* Announcements Section inside Drawer */}
          <div className="mob-row" style={{ borderBottom: '2px solid rgba(228, 179, 22, 0.4)' }}>
            <div
              className={`mob-trigger ${activeMob === "announcements" ? "open" : ""}`}
              onClick={() => handleMobToggle("announcements")}
              style={{ color: "#ff6b6b", fontWeight: "bold" }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HiOutlineSpeakerphone className="tb-a-icon" style={{ fontSize: '18px', color: '#ff6b6b' }} />
                Announcements
              </span>
              <FaChevronDown />
            </div>
            <div
              className="mob-sub"
              style={{
                maxHeight: activeMob === "announcements" ? "500px" : "0px",
                overflowY: "auto",
                background: "rgba(0, 0, 0, 0.15)"
              }}
            >
              <div className="announcements-content" style={{ padding: '12px 20px 20px' }}>
                {announcements.length > 0 ? (
                  <>
                    <Link to={`/event/${announcements[0]._id || announcements[0].id}`} className="announcement-link top-link" onClick={closeDrawer} style={{ paddingLeft: '0', color: 'var(--gold)', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.4', marginBottom: '15px' }}>
                      <FaArrowCircleRight className="a-arrow" style={{ marginTop: '3px', flexShrink: '0', color: 'var(--gold)' }} />
                      <span>{announcements[0].name} – Newest Update</span>
                    </Link>

                    {upcomingAnnouncements.length > 0 && (
                      <div className="announcement-category" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px', marginBottom: '12px' }}>
                        <h3 className="category-title" style={{ fontSize: '12px', color: '#ffb3b3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontWeight: 'bold' }}>Upcoming Events</h3>
                        <ul className="category-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                          {upcomingAnnouncements.map((ann) => (
                            <li key={ann._id || ann.id} style={{ margin: '6px 0' }}>
                              <Link to={`/event/${ann._id || ann.id}`} onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> {ann.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {Object.keys(groupedAnnouncements).map((typeLabel) => (
                      <div className="announcement-category" key={typeLabel} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px', marginBottom: '12px' }}>
                        <h3 className="category-title" style={{ fontSize: '12px', color: '#ffb3b3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontWeight: 'bold' }}>{typeLabel}s</h3>
                        <ul className="category-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                          {groupedAnnouncements[typeLabel].map((ann) => (
                            <li key={ann._id || ann.id} style={{ margin: '6px 0' }}>
                              <Link to={`/event/${ann._id || ann.id}`} onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> {ann.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <Link to="#" className="announcement-link top-link" onClick={closeDrawer} style={{ paddingLeft: '0', color: 'var(--gold)', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.4', marginBottom: '15px' }}>
                      <FaArrowCircleRight className="a-arrow" style={{ marginTop: '3px', flexShrink: '0', color: 'var(--gold)' }} />
                      <span>Application Open for UG / PG / UG NRI / Foreign/ Research Programmes 2026 – 27 – Apply Now</span>
                    </Link>

                    <div className="announcement-category" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px', marginBottom: '12px' }}>
                      <h3 className="category-title" style={{ fontSize: '12px', color: '#ffb3b3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontWeight: 'bold' }}>Admission Open</h3>
                      <ul className="category-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ margin: '6px 0' }}>
                          <Link to="#" onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> Undergraduate Programmes 2026
                          </Link>
                        </li>
                        <li style={{ margin: '6px 0' }}>
                          <Link to="#" onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> Postgraduate Programmes 2026
                          </Link>
                        </li>
                        <li style={{ margin: '6px 0' }}>
                          <Link to="#" onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> Ph.D. Admissions 2026
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="announcement-category" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px', marginBottom: '12px' }}>
                      <h3 className="category-title" style={{ fontSize: '12px', color: '#ffb3b3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontWeight: 'bold' }}>Hiring</h3>
                      <ul className="category-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ margin: '6px 0' }}>
                          <Link to="#" onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> Faculty Positions
                          </Link>
                        </li>
                        <li style={{ margin: '6px 0' }}>
                          <Link to="#" onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> Non-Teaching Staff
                          </Link>
                        </li>
                        <li style={{ margin: '6px 0' }}>
                          <Link to="#" onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> Research Assistantships
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="announcement-category" style={{ borderBottom: 'none', paddingBottom: '0' }}>
                      <h3 className="category-title" style={{ fontSize: '12px', color: '#ffb3b3', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontWeight: 'bold' }}>Upcoming Events</h3>
                      <ul className="category-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ margin: '6px 0' }}>
                          <Link to="#" onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> International Conference
                          </Link>
                        </li>
                        <li style={{ margin: '6px 0' }}>
                          <Link to="#" onClick={closeDrawer} style={{ paddingLeft: '10px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <FaArrowCircleRight className="a-arrow" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }} /> Annual Tech Fest 2026
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

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
                maxHeight: activeMob === "about" ? "300px" : "0px",
              }}
            >
              <Link to="/about" onClick={closeDrawer}>Overview</Link>
              <Link to="/about" onClick={closeDrawer}>Vision & Mission</Link>
              <Link to="/about" onClick={closeDrawer}>Leadership</Link>
              <Link to="/policy" onClick={closeDrawer}>Policy</Link>
              <Link to="/about" onClick={closeDrawer}>NAAC</Link>
              <Link to="/about" onClick={closeDrawer}>Infrastructure</Link>
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
                maxHeight: activeMob === "ac" ? "400px" : "0px",
                overflowY: "auto"
              }}
            >
              {institutions.length > 0 ? (
                institutions.map((inst, idx) => (
                  <Link key={idx} to="/institution" state={{ instName: inst.name }} onClick={closeDrawer}>{inst.name}</Link>
                ))
              ) : (
                <Link to="/departments" onClick={closeDrawer}>Departments</Link>
              )}
            </div>
          </div>

          {/* Placement */}
          <div className="mob-row">
            <div
              className={`mob-trigger ${activeMob === "placement" ? "open" : ""}`}
              onClick={() => handleMobToggle("placement")}
            >
              Placement <FaChevronDown />
            </div>
            <div
              className="mob-sub"
              style={{
                maxHeight: activeMob === "placement" ? "250px" : "0px",
              }}
            >
              <Link to="/placement" onClick={closeDrawer}>Placement Home</Link>
              <Link to="/placement/captapulating-careers" onClick={closeDrawer}>CDC Programs</Link>
              <Link to="/placement/career-development-centre" onClick={closeDrawer}>CDC-CET (Career Development Centre)</Link>
            </div>
          </div>

          {/* Campus */}
          <div className="mob-row">
            <div
              className={`mob-trigger ${activeMob === "campus" ? "open" : ""}`}
              onClick={() => handleMobToggle("campus")}
            >
              Campus Life <FaChevronDown />
            </div>
            <div
              className="mob-sub"
              style={{
                maxHeight: activeMob === "campus" ? "250px" : "0px",
              }}
            >
              <Link to="/campus-life" onClick={closeDrawer}>Campus Life Home</Link>
              <Link to="/campus-life#accommodation" onClick={closeDrawer}>Hostels</Link>
              <Link to="/campus-life#art-culture" onClick={closeDrawer}>Events</Link>
              <Link to="/library" onClick={closeDrawer}>Library</Link>
              <Link to="/campus-life#transport" onClick={closeDrawer}>Transport</Link>
            </div>
          </div>

          {/* Research */}
          <div className="mob-row">
            <div
              className={`mob-trigger ${activeMob === "research" ? "open" : ""}`}
              onClick={() => handleMobToggle("research")}
            >
              Research <FaChevronDown />
            </div>
            <div
              className="mob-sub"
              style={{
                maxHeight: activeMob === "research" ? "150px" : "0px",
              }}
            >
              <Link to="/research" onClick={closeDrawer}>Research Home</Link>
              <Link to="/sponsored-research" onClick={closeDrawer}>Sponsored Research</Link>
            </div>
          </div>

          {/* International Relations */}
          <Link className="mob-plain-link" to="/international-relations" onClick={closeDrawer}>International Affairs</Link>

          {/* Students */}
          <div className="mob-row">
            <div
              className={`mob-trigger ${activeMob === "students" ? "open" : ""}`}
              onClick={() => handleMobToggle("students")}
            >
              Students <FaChevronDown />
            </div>
            <div
              className="mob-sub"
              style={{
                maxHeight: activeMob === "students" ? "120px" : "0px",
              }}
            >
              <Link to="/students" onClick={closeDrawer}>Students Home</Link>
              <Link to="/examcell" onClick={closeDrawer}>Examcell</Link>
            </div>
          </div>

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
