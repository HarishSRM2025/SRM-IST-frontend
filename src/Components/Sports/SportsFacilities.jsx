import {
  FaVolleyballBall,
  FaBasketballBall,
  FaTableTennis,
  FaFutbol,
  FaRunning,
  FaTrophy,
} from "react-icons/fa";

import {
  GiTennisRacket,
  GiCricketBat,
  GiHockey,
  GiAmericanFootballBall,
} from "react-icons/gi";
import { sportsData } from "./sportsData";
const iconMap = {
  "Volleyball Court": <FaVolleyballBall />,
  "Basketball Court": <FaBasketballBall />,
  "Tennis Court": <GiTennisRacket />,
  "Badminton Court": <FaTableTennis />,
  "Track and Field": <FaRunning />,
  "Football Field": <FaFutbol />,
  "Hockey Field": <GiHockey />,
  "Cricket Field": <GiCricketBat />,
  "Ball Badminton Court": <FaTableTennis />,
  "Handball Court": <GiAmericanFootballBall />,
  "Futsal Court": <FaFutbol />,
  "Kho Kho Field": <FaRunning />,
  "Kabaddi Court": <FaRunning />,
};

const SportsFacilities = () => (
  <section className="exam-section exam-white">
    <div className="wrap">
      <span className="s-tag">
        {sportsData.outdoorFacilities.tag}
      </span>

      <h2 className="s-title">
        Sports Facilities & <em>Infrastructure</em>
      </h2>

      <div className="gold-bar"></div>

      <div className="cards-grid">
        {sportsData.outdoorFacilities.facilities.map(
          (facility, index) => (
            <div className="facility-card-sport" key={index}>
                <div className="facility-icon">
                    {iconMap[facility.name] || <FaTrophy />}
                </div>

                <div className="facility-count">
                    {facility.count}
                </div>

                <h4>{facility.name}</h4>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export default SportsFacilities;