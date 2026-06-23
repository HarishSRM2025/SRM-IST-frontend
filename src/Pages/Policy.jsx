import React from 'react';
import { FaBalanceScale, FaBookOpen, FaFileAlt, FaGraduationCap, FaShieldAlt, FaUsers } from 'react-icons/fa';
import Breadcrum from '../Components/Common/Breadcrum';

import '../css/AboutUs.css';

const policyItems = [
  {
    icon: <FaGraduationCap />,
    title: 'Academic Policy',
    description: 'Guidelines for academic conduct, assessment practices, attendance, curriculum delivery, and student progression.'
  },
  {
    icon: <FaUsers />,
    title: 'Student Code of Conduct',
    description: 'Standards that promote respectful campus life, responsible behavior, discipline, and a safe learning environment.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Anti-Ragging Policy',
    description: 'A strict zero-tolerance approach to ragging, supported by prevention, reporting, and disciplinary mechanisms.'
  },
  {
    icon: <FaBalanceScale />,
    title: 'Grievance Redressal',
    description: 'A transparent process for students, parents, faculty, and staff to raise concerns and seek timely resolution.'
  },
  {
    icon: <FaBookOpen />,
    title: 'Library & Resource Policy',
    description: 'Rules for responsible access to learning resources, digital repositories, library services, and institutional facilities.'
  },
  {
    icon: <FaFileAlt />,
    title: 'Research & Ethics Policy',
    description: 'Principles for academic integrity, research quality, ethical practice, publication standards, and collaboration.'
  }
];

const pgTitle="Policy";

const Policy = () => {
  return (
    <div className="about-page policy-page">
      <Breadcrum
        title={pgTitle}
        paths={[{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: pgTitle}]}
      />

      <section className="policy-section">
        <div className="about-container">
          <div className="policy-intro">
            <span className="s-tag">Policies</span>
            <h2 className="s-title">Framework for a <em>Responsible Campus</em></h2>
            <p>
              SRM Institute of Science and Technology, Tiruchirappalli follows institutional policies designed to maintain academic standards,
              safeguard students, encourage ethical conduct, and ensure that campus processes remain fair, transparent, and accountable.
            </p>
          </div>

          <div className="policy-grid">
            {policyItems.map((item) => (
              <article className="policy-card" key={item.title}>
                <div className="policy-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="policy-note">
            <div>
              <span className="s-tag">Need Assistance?</span>
              <h3>Policy documents and clarifications</h3>
              <p>
                For official policy documents, circulars, or clarifications, students and stakeholders may contact the relevant academic or
                administrative office of the institution.
              </p>
            </div>
            <a className="policy-contact-link" href="/contact">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
