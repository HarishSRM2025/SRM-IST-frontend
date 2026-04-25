import React, { useState } from 'react';
import { FaChevronRight, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AcademicsImage from '../../assets/images/home/academic-program.JPG';

const Academics = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const programs = [
    {
      name: "B.E / B.Tech Programs",
      count: "12 Courses",
      details: "Hands-on engineering degrees with labs, internships, and industry-led projects for future-ready careers.",
      departments: [
        {
          name: "Computer Science Engineering",
          desc: "AI, ML, Data Science and Core CS",
          subdepts: ["AI & ML", "Data Science", "Cyber Security"]
        },
        {
          name: "Electronics & Communication Engineering",
          desc: "VLSI, Embedded Systems and Communication Systems",
          subdepts: ["VLSI Design", "Embedded Systems", "Signal Processing"]
        },
        {
          name: "Mechanical Engineering",
          desc: "Design, Manufacturing and Thermal Sciences",
          subdepts: ["CAD/CAM", "Thermal Engineering", "Robotics"]
        }
      ]
    },
    {
      name: "M.E / M.Tech Programs",
      count: "8 Courses",
      details: "Advanced technology programs focused on research, innovation, and high-demand engineering specializations.",
      departments: [
        { name: "Computer Science Engineering" },
        { name: "Electronics & Communication Engineering" },
        { name: "Mechanical Engineering" },
        { name: "Civil Engineering" }
      ]
    },
    {
      name: "MBA Programs",
      count: "4 Specializations",
      details: "Leadership and management training built around business strategy, analytics, and entrepreneurship.",
      departments: [
        { name: "Marketing" },
        { name: "Finance" },
        { name: "Human Resources" },
        { name: "Operations" }
      ]
    },
    {
      name: "MCA Programs",
      count: "2 Courses",
      details: "Comprehensive computer applications curriculum emphasizing software development and real-world problem solving.",
      departments: [
        { name: "Software Systems" },
        { name: "Data Science" },
        { name: "Cyber Security" }
      ]
    },
    {
      name: "Ph.D Programs",
      count: "All Depts",
      details: "Doctoral research opportunities across departments with mentorship, funding, and published output.",
      departments: [
        { name: "Engineering" },
        { name: "Management" },
        { name: "Computer Science" },
        { name: "Applied Sciences" }
      ]
    },
    {
      name: "Lateral Entry",
      count: "Select Courses",
      details: "Pathway options for diploma students to join degree programs with bridge courses and academic support.",
      departments: [
        { name: "CSE" },
        { name: "ECE" },
        { name: "ME" },
        { name: "Civil" }
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
                        <button key={deptIndex} onClick={() => navigate(`/departments/`)} type="button" className="dept-tile">
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