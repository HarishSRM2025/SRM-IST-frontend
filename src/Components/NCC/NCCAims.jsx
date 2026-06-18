import React from "react";
import { nccData } from "./nccData";

const NCCAims = ({ logo }) => (
  <section className="cl-sec" id="aims">
    <div className="cl-container">
      <div className="cl-split1">
        <div className="cl-split__body" style={{ textAlign: "center" }}>
          <img
            src={logo}
            alt="NCC Logo"
            style={{ width: "90px", margin: "0 auto 20px" }}
          />
          <h2 className="s-title" style={{ marginBottom: "20px" }}>
            {nccData.aims.title}
          </h2>
          <ul style={{ textAlign: "left", lineHeight: "1.9", color: "var(--gray)" }}>
            {nccData.aims.points.map((point, i) => (
              <li key={i} style={{ marginBottom: "10px" }}>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="program-box">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {nccData.aims.quickLinks.map((link, i) => (
              <li key={i} style={{ marginBottom: "14px" }}>
                <a
                  href={link.anchor}
                  style={{
                    color: "var(--navy)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  ✓ {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default NCCAims;
