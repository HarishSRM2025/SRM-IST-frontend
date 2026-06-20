import React from "react";
import { sportsData } from "./sportsData";

const SportsCourt = () => (
  <section className="exam-section exam-cream">
    <div className="wrap">
      <span className="s-tag">
        {sportsData.sportsCourt.tag}
      </span>

      <h2 className="s-title">
        Sports <em>Court</em>
      </h2>

      <div className="gold-bar"></div>

      <div className="gallery-grid-sport">
        {sportsData.sportsCourt.court_images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={item.image}
              alt="images"
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SportsCourt;