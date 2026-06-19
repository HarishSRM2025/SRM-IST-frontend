import React, { useEffect } from "react";
import  "../css/SportsCss.css";
import Breadcrum from "../Components/Common/Breadcrum";
import sportsHero from "../assets/images/sports/chess2.webp";
import achievementImg from "../assets/images/sports/gold.png";
import eventImg from "../assets/images/sports/chess1.webp";
import SportsOverview from "../Components/Sports/SportsOverview";
import SportsDirectorMessage from "../Components/Sports/SportsDirectorMessage";
import SportsFacilities from "../Components/Sports/SportsFacilities";
import SportsFitness from "../Components/Sports/SportsFitness";
import SportsAchievements from "../Components/Sports/SportsAchievements";
import SportsEvents from "../Components/Sports/SportsEvents";
import SportsGallery from "../Components/Sports/SportsGallery";
import SportsCourt from "../Components/Sports/SportsCourt";

const Sports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sports-page">
      <Breadcrum
        title="Sports"
        subtitle="Excellence Through Fitness & Competition"
        bgImage={sportsHero}
        paths={[
          { name: "Home", link: "/" },
          { name: "Campus Life", link: "/campus-life" },
          { name: "Sports" }
        ]}
      />

    <SportsOverview />
    <SportsDirectorMessage/>
    <SportsFacilities />
    <SportsCourt />
    <SportsFitness />
    <SportsAchievements image={achievementImg} />
    <SportsEvents image={eventImg} />
    <SportsGallery />
    </main>
  );
};

export default Sports;