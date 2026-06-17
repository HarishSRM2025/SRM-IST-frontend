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
                Regular soft skills and personality development workshops to build confidence, communication, and workplace readiness
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Mock interviews and group discussion sessions designed to prepare students for real-world recruitment processes
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Engaging hackathons, quizzes, and leadership activities that encourage innovation, teamwork, and problem-solving skills
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Industry-aligned technical training sessions to keep students updated with the latest tools, technologies, and trends
            </li>
        </ul>
      </div>
    </section>
  );
};

export default CareerPrograms;
