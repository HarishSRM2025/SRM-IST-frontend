import React from "react";
import { sportsData } from "./sportsData";
const SportsDirectorMessage = () => (
  <section className="exam-section exam-cream">
    <div className="wrap">
      <span className="s-tag">{sportsData.directorMessage.tag}</span>

      <h2 className="s-title">
        Physical <em>Director</em>
      </h2>

      <div className="gold-bar"></div>

      <div className="two-col">
        <div>
          <img
            src={sportsData.directorMessage.image}
            alt={sportsData.directorMessage.name}
            className="section-image"
          />
        </div>

        <div>
          {sportsData.directorMessage.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <h4>{sportsData.directorMessage.name}</h4>
          <p>{sportsData.directorMessage.designation}</p>
        </div>
      </div>
    </div>
  </section>
);

export default SportsDirectorMessage;