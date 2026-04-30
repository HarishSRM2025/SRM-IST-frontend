import React from 'react';
import { useNavigate } from 'react-router-dom';

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
    { name: "Computer Science Engineering", code: "CSE" },
    { name: "Electronics & Communication Engineering", code: "ECE" },
    { name: "Mechanical Engineering", code: "ME" },
    { name: "Civil Engineering", code: "CE" },
    { name: "Information Technology", code: "IT" },
    { name: "Artificial Intelligence & Data Science", code: "AI&DS" },
    { name: "Electrical & Electronics Engineering", code: "EEE" },
    { name: "Biomedical Engineering", code: "BME" },
    { name: "Management Studies", code: "MBA" },
    { name: "Science & Humanities", code: "S&H" },
  ];

  return (
    <section className="ac-section" id="departments" style={{ backgroundColor: "var(--cream)" }}>
      <div className="wrap">
        <div>
          <span className="s-tag">Academic Departments</span>
          <h2 className="s-title">
            Explore Our <em>Departments</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        <div className="dept-list" style={{ marginTop: '40px', gap: '15px' }}>
          {departments.map((dept, index) => (
            <button
              key={index}
              onClick={() => navigate('/departments', { state: { deptName: dept.name, deptCode: dept.code } })}
              type="button"
              className="dept-tile"
              style={{ padding: '16px 24px', fontSize: '15px' }}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
