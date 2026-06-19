import React from "react";
import { achievementData } from "./nccData";

const NCCAchievement = ({acimages}) => {
  return (
    <section className="cl-sec" id="achievements">
      <div className="cl-container">
        <h2
          className="s-title"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          NCC Achievements
        </h2>

        {achievementData.map((achievement) => (
          <div className="achievement-item" key={achievement.id}>
            <h3 className="achievement-title">{achievement.title}</h3>

            <p className="achievement-description">
              {achievement.description}
            </p>

            <div className="gallery-grid-ncc">
              {acimages.map((img, index) => (
                <div className="gallery-card" key={index}>
                  <img
                    src={img}
                    alt={`${achievement.title} ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NCCAchievement;