import React from "react";

const FundedResearch = () => {
  return (
    <section className="dept-programmes" style={{ background: 'var(--cream)' }}>
      <div className="dept-programmes-inner">
        <div className="prog-layout" style={{ gridTemplateColumns: '1fr', border: 'none' }}>
          <div className="prog-detail" style={{ border: '1px solid var(--border)', borderRadius: '6px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div className="prog-detail-header">
              <div>
                <span className="s-tag">GRANTS & AWARDS</span>
                <h2 className="s-title" style={{ marginTop: '5px' }}>Funded <em>Research</em></h2>
                <div className="gold-bar" style={{ margin: '15px 0 0 0' }}></div>
              </div>
            </div>
            
            <p className="prog-desc" style={{ fontSize: "15px", marginBottom: "0" }}>
              SRM Institute of Science and Technology, Tiruchirappalli facilitates research pursuits of our faculty members, scholars and students at
              scale and it is the impact. There is a dedicated focus on ensuring funding is in place so that research projects and studies progress
              satisfactorily. Incentives in the form of awards and prizes are given out to those demonstrating excellence in research. Each department
              of SRMIST, Tiruchirappalli has the flexibility, freedom and encouragement to pursue various grants and funding from Government,
              Industry and Multilateral organizations. It is due to this prevalent culture of research that SRMIST, Tiruchirappalli enjoys the credibility as
              a committed and competent institution.
            </p>
            
            <div className="prog-meta-chip" style={{ marginTop: "24px" }}>
                <div className="prog-meta-dot"></div>
                <span>Government</span>
                <div className="prog-meta-dot"></div>
                <span>Industry</span>
                <div className="prog-meta-dot"></div>
                <span>Multilateral Organizations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundedResearch;
