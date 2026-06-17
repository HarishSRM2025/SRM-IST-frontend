import React from 'react';
import welcomePhoto from '../../assets/images/placement/contact/th.jpg';

const WelcomeMessage = () => {
  return (
    <section className="cdc-section cdc-bg-navy rev">
      <div className="wrap">
        <div className="cdc-welcome-grid">
          <div className="cdc-welcome-photo-card">
            <div className="cdc-welcome-photo-ring">
              <img
                className="cdc-welcome-photo"
                src={welcomePhoto}
                alt="Dr. Anita Priya Raja"
                loading="lazy"
              />
            </div>
            <h3 className="cdc-welcome-name">Dr Anita Priya Raja</h3>
            <p className="cdc-welcome-creds">
              MSW, PhD (UGC - JRF/SRF), NET, SLET, FEP IIM (I)
            </p>
            <span className="cdc-welcome-badge">Training Head</span>
          </div>

          <div className="cdc-welcome-content">
            <span className="s-tag">Leadership</span>
            <h2>
              Welcome <em>Message</em>
            </h2>
            <div className="gold-bar" style={{ background: 'var(--gold)' }} />
            <p className="cdc-welcome-text">
              The Career Development Center of SRM Institute of Science and Technology is committed to
              empowering students with industry-relevant skills, professional competencies, and the confidence
              needed to excel in today's competitive world. Through structured training programs, aptitude
              development, soft skills enhancement, personality development, mock interviews, and technical
              workshops embedded in the curriculum, we prepare our students not just for jobs — but for
              meaningful careers. We believe every student has immense potential; our role is to guide, mentor,
              and provide the right opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
