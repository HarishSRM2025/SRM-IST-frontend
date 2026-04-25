import React from 'react';

const CareerPrograms = () => {
  return (
    <section className="pl-section pl-bg-white">
      <div className="wrap">
        <span className="s-tag">LEARN & GROW</span>
        <h2 className="s-title">Career Development <em>Programs</em></h2>
        <div className="gold-bar"></div>
        
        <ul className="pl-text-list light">
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Soft skills training starting from the first year to build communication and teamwork skills.
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Aptitude and reasoning classes specifically tailored to recruitment tests.
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Domain-specific technical sessions.
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Mock interviews by industry experts to simulate actual interview environments.
            </li>
        </ul>
      </div>
    </section>
  );
};

export default CareerPrograms;
