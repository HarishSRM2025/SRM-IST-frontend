import React, { useState } from 'react';

const MobileDrawer = ({ open, setOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className={`mob-drawer ${open ? 'open' : ''}`}>
      <div className="mob-list">

        {/* About */}
        <div className="mob-row">
          <div
            className={`mob-trigger ${openMenu === 'about' ? 'open' : ''}`}
            onClick={() => toggleMenu('about')}
          >
            About <i className="fa-solid fa-chevron-down"></i>
          </div>

          <div
            className="mob-sub"
            style={{
              maxHeight: openMenu === 'about' ? '300px' : '0px',
            }}
          >
            <a href="#about" onClick={() => setOpen(false)}>Overview</a>
            <a href="#vision" onClick={() => setOpen(false)}>Vision & Mission</a>
            <a href="#about" onClick={() => setOpen(false)}>NAAC Accreditation</a>
          </div>
        </div>

        {/* Academics */}
        <div className="mob-row">
          <div
            className={`mob-trigger ${openMenu === 'ac' ? 'open' : ''}`}
            onClick={() => toggleMenu('ac')}
          >
            Academics <i className="fa-solid fa-chevron-down"></i>
          </div>

          <div
            className="mob-sub"
            style={{
              maxHeight: openMenu === 'ac' ? '400px' : '0px',
            }}
          >
            <a href="#academics" onClick={() => setOpen(false)}>B.Tech Programs</a>
            <a href="#academics" onClick={() => setOpen(false)}>M.Tech Programs</a>
            <a href="#academics" onClick={() => setOpen(false)}>MBA / MCA</a>
            <a href="#academics" onClick={() => setOpen(false)}>Ph.D Research</a>
          </div>
        </div>

        {/* Placement */}
        <div className="mob-row">
          <div
            className={`mob-trigger ${openMenu === 'pl' ? 'open' : ''}`}
            onClick={() => toggleMenu('pl')}
          >
            Placement <i className="fa-solid fa-chevron-down"></i>
          </div>

          <div
            className="mob-sub"
            style={{
              maxHeight: openMenu === 'pl' ? '300px' : '0px',
            }}
          >
            <a href="#placement" onClick={() => setOpen(false)}>Statistics</a>
            <a href="#placement" onClick={() => setOpen(false)}>Top Recruiters</a>
            <a href="#placement" onClick={() => setOpen(false)}>Career Guidance</a>
          </div>
        </div>

        {/* Campus */}
        <div className="mob-row">
          <div
            className={`mob-trigger ${openMenu === 'cam' ? 'open' : ''}`}
            onClick={() => toggleMenu('cam')}
          >
            Campus <i className="fa-solid fa-chevron-down"></i>
          </div>

          <div
            className="mob-sub"
            style={{
              maxHeight: openMenu === 'cam' ? '300px' : '0px',
            }}
          >
            <a href="#campus" onClick={() => setOpen(false)}>Hostels</a>
            <a href="#campus" onClick={() => setOpen(false)}>Sports & Fitness</a>
            <a href="#campus" onClick={() => setOpen(false)}>Library</a>
          </div>
        </div>

        {/* Static Links */}
        <a className="mob-plain-link" href="#news" onClick={() => setOpen(false)}>News</a>
        <a className="mob-plain-link" href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a className="mob-cta" href="#contact" onClick={() => setOpen(false)}>Apply Now →</a>

      </div>
    </div>
  );
};

export default MobileDrawer;