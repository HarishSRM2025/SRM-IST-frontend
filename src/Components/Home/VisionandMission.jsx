import React from "react";
import { FaEye, FaRocket } from "react-icons/fa";
import vissionImage from "../../assets/images/home/vission.png"

const VisionandMission = () => {
  return (
    <section className="vision-section rev" id="vision">
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
                <FaEye color="#e4b316"/>
              </div>
              <div className="vis-card-title">Our Vision</div>
              <p className="vis-card-text">
                To be a globally recognized institution that nurtures creative thinkers, ethical leaders, and skilled professionals who contribute to a sustainable world through excellence in education, research, and innovation.
              </p>
            </div>
               {/* Image */}
            <div className="vis-img">
              <img
                src={vissionImage}
                alt="Students"
                loading="lazy"   // ✅ performance fix
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
                <FaRocket color="#e4b316"/>
              </div>
              <div className="vis-card-title">Our Mission</div>
              <p className="vis-card-text">
                To provide high-quality education integrated with cutting-edge research, foster entrepreneurial thinking, build strong industry connections, and develop graduates of strong character who serve society with dedication.
              </p>
            </div>

          </div>

       

        </div>
      </div>
    </section>
  );
};

export default VisionandMission;