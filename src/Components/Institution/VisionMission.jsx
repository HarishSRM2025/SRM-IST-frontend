import React from "react";
import { FaEye, FaRocket } from "react-icons/fa";
// using a placeholder since we are not sure if the other asset is strictly for home, but the user said "my template"
// Actually, let's use the same image from the home component for consistency
import vissionImage from "../../assets/images/home/vission.png";

const VisionMission = () => {
  return (
    <section className="vision-section" id="vision">
      <div className="wrap">
        {/* Header */}
        <div>
          <span className="s-tag">Our Vision & Mission</span>
          <h2 className="s-title">
            Purpose-Driven <em>Excellence</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        <div className="vis-grid">
          {/* Cards */}
          <div className="vis-cards">
            <div className="vis-card">
              <div className="vis-card-ico">
                <FaEye color="#e4b316" />
              </div>
              <div className="vis-card-title">Our Vision</div>
              <p className="vis-card-text">
                To emerge as a premier institution recognized globally for academic excellence, innovative research, and producing socially responsible professionals who are equipped to meet the challenges of the future.
              </p>
            </div>
            
            {/* Image */}
            <div className="vis-img">
              <img
                src={vissionImage}
                alt="Students"
                loading="lazy"
              />
              <div className="vis-badge">
                Est. 2002
                <br />
                <small style={{ fontWeight: 400, fontSize: "11px" }}>
                  20+ Years Excellence
                </small>
              </div>
            </div>

            <div className="vis-card">
              <div className="vis-card-ico">
                <FaRocket color="#e4b316" />
              </div>
              <div className="vis-card-title">Our Mission</div>
              <p className="vis-card-text">
                Our mission is to disseminate knowledge through rigorous academic programs, foster a culture of inquiry and innovation, and build strong linkages with industry and society to create impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
