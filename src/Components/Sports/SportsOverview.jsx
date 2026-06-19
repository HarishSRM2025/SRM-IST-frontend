import React from "react";
import { sportsData } from "./sportsData";


const SportsOverview = () => (
  <section className="exam-section exam-white sports-overview">
    <div className="wrap">
      <span className="s-tag">{sportsData.overview.tag}</span>

      <h2 className="s-title">
        Sports <em>Overview</em>
      </h2>

      <div className="gold-bar"></div>

      <div className="overview-box sports-overview-content">
        {sportsData.overview.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  </section>
);

export default SportsOverview;
