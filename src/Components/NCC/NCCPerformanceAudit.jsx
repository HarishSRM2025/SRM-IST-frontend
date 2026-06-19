import React from "react";
import { nccData } from "./nccData";

const NCCPerformanceAudit = ({ image }) => (
  <section className="cl-sec" id="performance-audit" style={{ background: "var(--light)" }}>
    <div className="cl-container">
      <div className="two-col">
        <div>
          <h3 style={{ color: "var(--navy)" }}>{nccData.performanceAudit.title}</h3>
          <p style={{ color: "var(--gray)", lineHeight: "1.8", marginTop: "14px" }}>
            {nccData.performanceAudit.description}
          </p>
        </div>

        <div>
          <img
            src={image}
            alt={nccData.performanceAudit.title}
            className="section-image"
            loading="lazy"
            style={{ height: "320px" }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default NCCPerformanceAudit;
