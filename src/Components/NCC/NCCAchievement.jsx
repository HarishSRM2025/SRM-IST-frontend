import React from "react";
import { achievementData } from "./nccData";

const NCCAchievement = () => {
  return (
    <section className="cl-sec exam-cream" id="achievements">
      <div className="cl-container">
        <h2 className="s-title achievement-heading">
          NCC Achievements
        </h2>

        <div className="achievement-grid-ncc">
          {achievementData.map((achievement) => (
            <div className="achievement-card-ncc" key={achievement.id}>
              
              <div className="achievement-image-wrap">
                <img
                  src={achievement.images[0]}
                  alt={achievement.title}
                  className="achievement-image"
                />

                <div className="achievement-overlay">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>

              <div className="achievement-content">
                <h3>{achievement.title}</h3>

                {achievement.images.length > 1 && (
                  <div className="achievement-thumb-grid">
                    {achievement.images.slice(1).map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${achievement.title}-${index}`}
                        className="achievement-thumb"
                      />
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NCCAchievement;