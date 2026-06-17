import React from 'react';
import { FaEye, FaRocket } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section className="cdc-section cdc-bg-cream rev">
      <div className="wrap">
        <div>
          <span className="s-tag">Our Purpose</span>
          <h2 className="s-title">
            Vision &amp; <em>Mission</em>
          </h2>
          <div className="gold-bar" />
        </div>

        <div className="cdc-vm-grid">
          <article className="cdc-vm-card">
            <div className="cdc-vm-icon-wrap">
              <FaEye />
            </div>
            <h3>Vision</h3>
            <p>
              To transform young minds into career-focused and socially responsible individuals who can
              inspire, innovate, and overcome challenges in the global environment.
            </p>
          </article>

          <article className="cdc-vm-card">
            <div className="cdc-vm-icon-wrap">
              <FaRocket />
            </div>
            <h3>Mission</h3>
            <p>
              Create opportunities for students to explore and demonstrate their potential. Adopt innovative
              practices to enhance the learners' professional competencies. Empower students to surpass
              challenges and emerge as global leaders.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
