import React from "react";

const Overview = () => {
  return (
    <section className="dept-hod">
      <div className="dept-hod-inner">
        <div className="hod-card">
          <div className="hod-img-placeholder" style={{ padding: '20px', background: 'var(--white)', height: 'auto', borderBottom: '1px solid var(--border)' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/English_dialects1997_modified.svg/512px-English_dialects1997_modified.svg.png" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              alt="Research Areas Pie Chart" 
            />
          </div>
          <div className="hod-card-body">
            <strong>Research Impact</strong>
            <span>Distribution</span>
          </div>
        </div>

        <div>
          <span className="s-tag">OVERVIEW</span>
          <h2 className="s-title"><em>Research</em> Overview</h2>
          <div className="gold-bar"></div>
          <div className="hod-message">
            <p>
              SRM Institute of Science and Technology, Tiruchirappalli have taken various research initiatives to mobilize the available knowledge resources for research and also, to come up strongly with innovative solutions.
            </p>
            <p style={{ marginBottom: "14px", fontWeight: "600", color: "var(--navy)" }}>
              Faculty and students are actively involved in research, as the university is:
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: "0", color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
              <li style={{ position: "relative", paddingLeft: "15px", marginBottom: "8px" }}>
                <span style={{ position: "absolute", left: 0, top: "2px", color: "var(--gold)" }}>•</span>
                Committed to fostering and furthering research excellence
              </li>
              <li style={{ position: "relative", paddingLeft: "15px", marginBottom: "8px" }}>
                <span style={{ position: "absolute", left: 0, top: "2px", color: "var(--gold)" }}>•</span>
                Specially focused on emerging areas of greate potential like Nanotechnology, Bioengineering, Energy, Environment, Materials and Embedded systems among others
              </li>
              <li style={{ position: "relative", paddingLeft: "15px", marginBottom: "8px" }}>
                <span style={{ position: "absolute", left: 0, top: "2px", color: "var(--gold)" }}>•</span>
                Actively involved in a research projects that have nation building and public cause at their heart like for instance rural healthcare, among others.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
