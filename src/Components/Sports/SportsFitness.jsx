import React from "react";
import { sportsData } from "./sportsData";
import { FaTrophy } from "react-icons/fa";
const SportsFitness = () => (
    <section className="exam-section">
  <div className="wrap">
    <div className="sports-grid">

      <div className="sports-card">
   

        <h2 className="s-title">
          Indoor <em>Games</em>
        </h2>

        <div className="gold-bar"></div>

        <div className="sports-list-item">
            <FaTrophy className="sports-icon" />
            <p>{sportsData.indoorGames.description}</p>
        </div>
      </div>

      <div className="sports-card">
      
        <h2 className="s-title">
            Outdoor <em>Games</em>
        </h2>

        <div className="gold-bar"></div>
        {sportsData.outdoorGames.content.map((item, i) => (
        <div key={i} className="sports-list-item">
            <FaTrophy className="sports-icon" />
            <p>{item}</p>
        </div>
        ))}
      </div>

      <div className="sports-card">
     

        <h2 className="s-title">
          Fitness <em>Centre</em>
        </h2>

        <div className="gold-bar"></div>
        {sportsData.fitnessCentre.content.map((item, i) => (
            <div key={i} className="sports-list-item">
                <FaTrophy className="sports-icon" />
                <p>{item}</p>
            </div>
            ))}
      </div>
    
      <div className="sports-card">
  

        <h2 className="s-title">
          Yoga
        </h2>
        {sportsData.yoga.content.map((item, i) => (
        <div key={i} className="sports-list-item">
            <FaTrophy className="sports-icon" />
            <p>{item}</p>
        </div>
        ))}
      </div>

    </div>
  </div>
</section>
);

export default SportsFitness;