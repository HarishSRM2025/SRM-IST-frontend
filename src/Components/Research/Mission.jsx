import React from "react";
import { FaBullseye, FaBookOpen, FaUserGraduate, FaHandshake } from "react-icons/fa";

const missionItems = [
  {
    icon: FaBullseye,
    title: "Interdisciplinary Collaborations",
    desc: "Serve as a platform for strong interdisciplinary collaborations and knowledge sharing.",
  },
  {
    icon: FaBookOpen,
    title: "High Quality Publications",
    desc: "Publish research findings in high quality journals of international repute.",
  },
  {
    icon: FaUserGraduate,
    title: "Human Resource Creation",
    desc: "Create scientifically profound human resources for academic & Industrial research.",
  },
  {
    icon: FaHandshake,
    title: "Industrial Collaborations",
    desc: "Promote industrial collaborations involving active and mutually beneficial R & D projects.",
  },
];

const Mission = () => {
  return (
    <section className="dept-achievements" style={{ background: 'var(--white)' }}>
      <style>{`
        .research-mission-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .research-mission-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #fff;
          border: 1px solid var(--border, rgba(15, 23, 42, 0.08));
          padding: 22px 20px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
          min-height: 150px;
        }

        .research-mission-icon {
          min-width: 54px;
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: rgba(212, 175, 55, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .research-mission-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy, #0f172a);
          margin-bottom: 8px;
        }

        .research-mission-desc {
          font-size: 0.96rem;
          line-height: 1.7;
          color: rgba(15, 23, 42, 0.8);
        }

        @media (max-width: 768px) {
          .research-mission-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="dept-achievements-inner">
        <div style={{ marginBottom: '40px' }}>
          <span className="s-tag">OUR CORE PURPOSE</span>
          <h2 className="s-title">Research <em>Mission</em></h2>
          <div className="gold-bar"></div>
        </div>

        <div className="research-mission-grid">
          {missionItems.map(({ icon: Icon, title, desc }) => (
            <div className="research-mission-card" key={title}>
              <div className="research-mission-icon">
                <Icon style={{ color: 'var(--gold)' }} />
              </div>
              <div>
                <div className="research-mission-title">{title}</div>
                <div className="research-mission-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
