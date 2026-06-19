import React from "react";
import { sportsData } from "./sportsData";

const SportsAchievements = ({ image }) => (
  <section className="cl-sec  exam-cream" id="achievements">
    <div className="cl-container">
      <div className="cl-split">
        <div className="cl-split__body">
          {/* Your existing achievement content goes here */}
            <span className="s-tag">
                {sportsData.achievements.tag}
            </span>

            <h2 className="s-title">
                Student <em>Achievements</em>
            </h2>
          {sportsData.achievements.items.map((item, i) => (
                <div className="event-card" key={i}>
                <h3>{item.title}</h3>
                <h5>{item.student}</h5>
                <p>{item.description}</p>
                </div>
            ))}
        </div>
        <div className="cl-split__img">
          <img src={image} alt="Sports Achievements" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);


export default SportsAchievements;