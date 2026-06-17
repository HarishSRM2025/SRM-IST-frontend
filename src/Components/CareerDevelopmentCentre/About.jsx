import React from 'react';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <section className="cdc-section cdc-bg-white rev">
      <div className="wrap">
        <div className="cdc-about-content">
          <span className="s-tag">About CDC</span>
          <h2 className="s-title">
            About <em>Career</em> Development Center
          </h2>
          <div className="gold-bar" style={{ marginBottom: '28px' }} />
          
          <p>
            The Career Development Center (CDC) at SRMIST Trichy Campus primarily focuses on training
            students for successful corporate placements. The center is committed to equipping students
            with the skills, confidence, and professional competencies required to meet industry standards
            and secure rewarding career opportunities. The center offers CDC training sessions through its
            embedded courses right from the 1st semester onwards by its dedicated team of in-house
            trainers.
          </p>
          
          <div className="cdc-list-section">
            <ul className="cdc-about-list">
              <div className="cdc-tag-ul">01</div>
              <li className="primary">Corporate Placement Training</li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Aptitude and quantitative ability training
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Logical reasoning and problem-solving skills
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Technical skill enhancement based on industry demands
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Coding practice sessions (for relevant disciplines)
              </li>
            </ul>

            <ul className="cdc-about-list">
              <div className="cdc-tag-ul">02</div>
              <li className="primary">Soft Skills & Communication Development</li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Verbal and written communication
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Presentation skills
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Group discussion techniques
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Personal interview preparation
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Corporate etiquette and workplace professionalism
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Resume building and profile development guidance
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                LinkedIn and professional branding support
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Roadmap creation for skill enhancement and certifications
              </li>
            </ul>

            <ul className="cdc-about-list">
              <div className="cdc-tag-ul">03</div>
              <li className="primary">Mock Assessments & Interview Practice</li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Regular mock tests and assessment drills
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Mock interviews simulating real recruitment processes
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Personalized feedback after mock interviews
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Improvement strategies for aptitude and technical rounds
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Confidence-building and stress management techniques
              </li>
            </ul>

            <ul className="cdc-about-list">
              <div className="cdc-tag-ul">04</div>
              <li className="primary">Industry Alignment</li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Monitoring corporate hiring trends
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Training modules designed to match industry expectations
              </li>
            </ul>

            <ul className="cdc-about-list">
              <div className="cdc-tag-ul">05</div>
              <li className="primary">Career Guidance & Counselling Services</li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                One-on-one career counselling sessions
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Identifying individual strengths, interests, and career aspirations
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Guidance on choosing suitable career domains
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Support in setting short-term and long-term career goals
              </li>
            </ul>

            <ul className="cdc-about-list">
              <div className="cdc-tag-ul">06</div>
              <li className="primary">Placement Coordination</li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Supporting the Placement Dean during campus recruitment drives
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Organizing pre-placement talks and company interactions
              </li>
              <li className="secondary">
                <FaCheck className="cdc-check-icon" />
                Providing access to diverse career opportunities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
