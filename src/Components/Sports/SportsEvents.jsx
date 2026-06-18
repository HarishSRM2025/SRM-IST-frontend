import React from "react";
import { sportsData } from "./sportsData";
const SportsEvents = ({ image }) => (
  <section className="cl-sec" id="events">
    <div className="cl-container">
      <div className="cl-split1">
        <div className="cl-split__img">
          <img src={image} alt="Sports Events" loading="lazy" />
        </div>
        <div className="cl-split__body">
          <span className="s-tag">
            {sportsData.events.tag}
          </span>

          <h2 className="s-title">
           State Level <em>Chess</em> 
          </h2>

          <div className="gold-bar"></div>
           <div className="event-card">
              <h3>{sportsData.events.title}</h3>

              <p>{sportsData.events.description}</p>

              <ul>
                {sportsData.events.highlights.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default SportsEvents;