import React from 'react';

const ThrivingCampus = () => {
  return (
    <div className="dept-hod" style={{background:"#f8f6f1"}}>
      <div className="dept-hod-inner" style={{ gridTemplateColumns: '1fr', maxWidth: '1000px' }}>
        <div className="hod-message">
          <span className="s-tag">CAMPUS LIFE</span>
          <h2 className="s-title">A Thriving Campus for <em>Learning and Innovation</em></h2>
          <div className="gold-bar"></div>
          <p>
            The campus offers a green and serene environment with lush surroundings and thoughtfully designed infrastructure, creating an ideal setting for learning. Recognized as a preferred study destination, it attracts students from across the country seeking for quality higher education.
          </p>
          <p>
            The institution provides industry-focused programs aligned with emerging global technologies, supported by expert faculty who bring experience and dedication to foster a dynamic academic atmosphere. With strong emphasis on research and growth opportunities, students and scholars are encouraged to excel and innovate. Additionally, a culture of collaborative learning promotes partnerships and diverse academic exposure, preparing students for a globally connected future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThrivingCampus;
