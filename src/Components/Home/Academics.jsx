import React, { useState } from 'react';
import { FaChevronRight, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AcademicsImage from '../../assets/images/home/academic-program.JPG';

const Academics = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const programs = [
    {
      name: "Engineering & Technology",
      count: "View Programs",
      details: "Innovative engineering and technology programs designed to foster technical excellence and problem-solving skills.",
      departments: [
        { name: "Computer Science Engineering" },
        { name: "Electronics & Communication Engineering" },
        { name: "Mechanical Engineering" },
        { name: "Civil Engineering" }
      ]
    },
    {
      name: "College of Management",
      count: "View Programs",
      details: "Comprehensive management programs shaping future business leaders, innovators, and entrepreneurs.",
      departments: [
        { name: "MBA" },
        { name: "BBA" }
      ]
    },
    {
      name: "Science & Humanities",
      count: "View Programs",
      details: "Foundational and advanced programs in core sciences, literature, and humanistic studies for holistic development.",
      departments: [
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Mathematics" },
        { name: "English" }
      ]
    },
    {
      name: "Institute of Hotel Management",
      count: "View Programs",
      details: "Top-tier hospitality and culinary management training with world-class facilities and global industry exposure.",
      departments: [
        { name: "Hotel Management" },
        { name: "Culinary Arts" }
      ]
    },
    {
      name: "College of Physiotherapy",
      count: "View Programs",
      details: "Specialized training in physical rehabilitation, sports medicine, and advanced therapeutic sciences.",
      departments: [
        { name: "BPT" },
        { name: "MPT" }
      ]
    },
    {
      name: "College of Occupational Therapy",
      count: "View Programs",
      details: "Empowering students with clinical knowledge and skills to help individuals regain health and independence.",
      departments: [
        { name: "BOT" },
        { name: "MOT" }
      ]
    },
    {
      name: "College of Allied Health Sciences",
      count: "View Programs",
      details: "Advanced healthcare programs focusing on medical diagnostics, therapeutic support, and clinical technology.",
      departments: [
        { name: "Medical Lab Technology" },
        { name: "Radiography" },
        { name: "Optometry" }
      ]
    }
  ];

  return (
    <div className="ac-section" id="academics">
      <div className="wrap">

        {/* Header */}
        <div className="rev">
          <span className="s-tag">Academic Programs</span>
          <h2 className="s-title">
            Programs Designed for <em>Tomorrow's Leaders</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        <div className="ac-grid">

          {/* Program List */}
          <div className="prog-list rev">
            {programs.map((prog, index) => (
              <div key={index} className="prog-panel">
                <button
                  type="button"
                  className={`prog-item ${active === index ? 'on' : ''}`}
                  onClick={() => setActive(active === index ? null : index)}
                  aria-expanded={active === index}
                >
                  <div className="prog-l">
                    <span className="prog-dot"></span>
                    <span className="prog-name">{prog.name}</span>
                  </div>

                  <div className="prog-r">
                    <span className="prog-ct">{prog.count}</span>
                    {active === index ? (
                      <FaChevronUp color="#c8952a" />
                    ) : (
                      <FaChevronRight color="#c8952a" />
                    )}
                  </div>
                </button>

                <div className={`prog-content ${active === index ? 'open' : ''}`} style={{backgroundColor:"#f8f6f1"}}>
                  <p>{prog.details}</p>
                  {prog.departments && (
                    <div className="dept-list">
                      {prog.departments.map((dept, deptIndex) => (
                        <button key={deptIndex} onClick={() => navigate(`/departments`, { state: { deptName: dept.name } })} type="button" className="dept-tile">
                          {dept.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div className="ac-img-side rev d2">
            <img src={AcademicsImage} alt="Lab" />

            <div className="ac-hl">
              <div className="ac-hl-title">
                Industry-Integrated Curriculum
              </div>
              <p>
                Programs developed with industry partners — real-world projects
                and internships embedded in every course.
              </p>
            </div>
          </div>

        </div>

        

      </div>
    </div>
  );
};

export default Academics;