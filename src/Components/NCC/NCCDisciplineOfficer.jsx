import React from "react";
import { nccData } from "./nccData";

const NCCDisciplineOfficer = ({ image }) => (
  <section className="cl-sec" id="discipline">
    <div className="cl-container">
      <div className="two-col">
        <div className="highlight-box">
          <h3>{nccData.discipline.cardinalsTitle}</h3>
          <ul style={{ paddingLeft: "20px", marginTop: "15px" }}>
            {nccData.discipline.cardinals.map((item, i) => (
              <li key={i} style={{ marginBottom: "10px", lineHeight: "1.7" }}>
                {item}
              </li>
            ))}
          </ul>

          <h4 style={{ marginTop: "30px" }}>{nccData.discipline.mottoTitle}</h4>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            {nccData.discipline.motto.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="profile-card">
          <img
            src={image}
            alt={nccData.officer.name}
            style={{ width: "100%", height: "320px", objectFit: "cover" }}
          />
          <div className="profile-info">
            <h4>{nccData.officer.name}</h4>
            <span>{nccData.officer.designation}</span>
            {nccData.officer.details.map((line, i) => (
              <p key={i} style={{ color: "var(--gray)", fontSize: "14px", margin: "4px 0" }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NCCDisciplineOfficer;
