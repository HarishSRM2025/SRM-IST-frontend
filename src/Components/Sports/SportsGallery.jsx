import React from "react";
import { sportsData } from "./sportsData";

const SportsGallery = () => (
  <section className="exam-section  exam-cream">
    <div className="wrap">
      <span className="s-tag">
        {sportsData.sportsAchievement.tag}
      </span>

      <h2 className="s-title">
        Sports <em>Achievements</em>
      </h2>

      <div className="gold-bar"></div>

      <div className="gallery-grid">
        {sportsData.sportsAchievement.achieve_images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SportsGallery;