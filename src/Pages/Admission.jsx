import React from "react";
import "../css/Admission.css";
import { admissionData } from "../Data/admissionData";

const Admission = () => {
  return (
    <div className="admission-page">
      <div className="admission-container">
        <div className="admission-header">
          <span className="s-tag">{admissionData.tag}</span>

          <h2 className="s-title">
            {admissionData.title} <em>{admissionData.highlight}</em>
          </h2>

          <div className="gold-bar"></div>
        </div>

        <div className="admission-grid">
          {admissionData.admissions.map((item, index) => (
            <div className="admission-card" key={index}>
              <h4>{item.title}</h4>

              <div className="admission-actions">
                {item.buttons.map((button, btnIndex) => (
                  <a
                    key={btnIndex}
                    href={button.link}
                    target={button.external ? "_blank" : "_self"}
                    rel={button.external ? "noopener noreferrer" : ""}
                    className={
                      button.type === "gold"
                        ? "btn-gold"
                        : "btn-outline"
                    }
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admission;