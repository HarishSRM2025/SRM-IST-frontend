import React from "react";
import { FaFileAlt } from "react-icons/fa";

import pdf1 from "../../assets/images/research/pdf-policies/1.pdf";
import pdf2 from "../../assets/images/research/pdf-policies/2.pdf";
import pdf3 from "../../assets/images/research/pdf-policies/3.pdf";
import pdf4 from "../../assets/images/research/pdf-policies/4.pdf";
import pdf5 from "../../assets/images/research/pdf-policies/5.pdf";
import pdf6 from "../../assets/images/research/pdf-policies/6.pdf";
import pdf7 from "../../assets/images/research/pdf-policies/7.pdf";

const Policies = () => {
  const policiesList = [
    { title: "Policy on Promotion of Research", pdf: pdf1 },
    { title: "Policy on Chemical and Hazardous Waste disposal", pdf: pdf2 },
    { title: "Policy on Incentives", pdf: pdf3 },
    { title: "Policy on Plagiarism", pdf: pdf4 },
    { title: "Policy on IPR", pdf: pdf5 },
    { title: "Policy on Consultancy", pdf: pdf6 },
    { title: "Institutional Code of Ethics for Research", pdf: pdf7 }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'linear-gradient(rgba(11, 29, 53, 0.8), rgba(11, 29, 53, 0.9)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80") center/cover no-repeat', position: "relative" }}>
      <div className="wrap">
        <div style={{ marginBottom: "50px", textAlign: "left" }}>
          <span className="s-tag" style={{ color: "rgba(255,255,255,0.8)", border: "none" }}>DOCUMENTATION</span>
          <h2 className="s-title" style={{ color: "#fff" }}>Research <em>Policies</em></h2>
          <div className="gold-bar"></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
          {policiesList.map((policy, index) => (
            <div key={index} style={{
              backgroundColor: "#fff", 
              padding: "20px 24px", 
              display: "flex", 
              alignItems: "center", 
              gap: "15px", 
              borderRadius: "4px",
              cursor: "pointer",
              transition: "transform 0.3s, boxShadow 0.3s",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"; }}
            onClick={() => window.open(policy.pdf, '_blank')}
            >
              <FaFileAlt style={{ color: "var(--navy)", fontSize: "24px", flexShrink: 0 }} />
              <span style={{ color: "var(--navy)", fontSize: "14px", fontWeight: "700", lineHeight: "1.4" }}>
                {policy.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Policies;
