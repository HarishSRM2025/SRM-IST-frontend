import React from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import Overview from '../Components/AboutUs/Overview';
import ThrivingCampus from '../Components/AboutUs/ThrivingCampus';
import Placements from '../Components/AboutUs/Placements';
import CampusFacilities from '../Components/AboutUs/CampusFacilities';
import History from '../Components/AboutUs/History';
import '../css/Department.css'; // For common widgets and cards
import '../css/AboutUs.css'; // For page specific styles

const AboutUs = () => {
  return (
    <div className="about-page">
      <Breadcrum 
        title="SRM Institute Of Science & Technology<br/>Tiruchirappalli"
        paths={[{ name: 'Home', link: '/' }, { name: 'About Us' }]}
      />

      <Overview />
      <ThrivingCampus />
      {/* <Placements /> */}
      <CampusFacilities />
      <History />
    </div>
  );
};

export default AboutUs;

