import React from "react";
import { FaEye, FaRocket } from "react-icons/fa";

const VisionMission = ({ vision, mission }) => {
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

        {/* 2-Card Layout matching template design & color theme */}
        <div className="vis-grid">
          <div className="vis-cards vis-cards-no-img">
            <div className="vis-card">
              <div className="vis-card-ico">
                <FaEye color="#e4b316" size={32} />
              </div>
              <div className="vis-card-title">Our Vision</div>
              <p className="vis-card-text">
                {vision || "To emerge as a premier institution recognized globally for academic excellence, innovative research, and producing socially responsible professionals who are equipped to meet the challenges of the future."}
              </p>
            </div>

            <div className="vis-card">
              <div className="vis-card-ico">
                <FaRocket color="#e4b316" size={32} />
              </div>
              <div className="vis-card-title">Our Mission</div>
              <p className="vis-card-text">
                {mission || "Our mission is to disseminate knowledge through rigorous academic programs, foster a culture of inquiry and innovation, and build strong linkages with industry and society to create impactful solutions."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
