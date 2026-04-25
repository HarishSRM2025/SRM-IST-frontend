import React from "react";
import { FaBullseye, FaBookOpen, FaUserGraduate, FaHandshake } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="dept-achievements" style={{ background: 'var(--white)' }}>
      <div className="dept-achievements-inner">
        <div style={{ marginBottom: '40px' }}>
          <span className="s-tag">OUR CORE PURPOSE</span>
          <h2 className="s-title">Research <em>Mission</em></h2>
          <div className="gold-bar"></div>
        </div>

        <div className="achieve-layout">
          <div>
            <div className="achieve-col-title">Mission Statements</div>
            
            <div className="fa-card">
              <div className="fa-icon"><FaBullseye style={{ color: "var(--gold)" }} /></div>
              <div className="fa-content">
                <div className="fa-title">Interdisciplinary Collaborations</div>
                <div className="fa-desc">Serve as a platform for strong interdisciplinary collaborations and knowledge sharing.</div>
              </div>
            </div>

            <div className="fa-card">
              <div className="fa-icon"><FaBookOpen style={{ color: "var(--gold)" }} /></div>
              <div className="fa-content">
                <div className="fa-title">High Quality Publications</div>
                <div className="fa-desc">Publish research findings in high quality journals of international repute.</div>
              </div>
            </div>

            <div className="fa-card">
              <div className="fa-icon"><FaUserGraduate style={{ color: "var(--gold)" }} /></div>
              <div className="fa-content">
                <div className="fa-title">Human Resource Creation</div>
                <div className="fa-desc">Create scientifically profound human resources for academic & Industrial research.</div>
              </div>
            </div>

            <div className="fa-card">
              <div className="fa-icon"><FaHandshake style={{ color: "var(--gold)" }} /></div>
              <div className="fa-content">
                <div className="fa-title">Industrial Collaborations</div>
                <div className="fa-desc">Promote industrial collaborations involving active and mutually beneficial R & D projects.</div>
              </div>
            </div>
          </div>

          <div>
             <div className="achieve-col-title">Campus & Infrastructure</div>
            <div style={{ borderRadius: '6px', overflow: 'hidden', height: 'calc(100% - 46px)', border: '1px solid var(--border)' }}>
               <img 
                 src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80" 
                 alt="Research Mission" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
