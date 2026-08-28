import React from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import ArtCultureSection from '../Components/CampusLife/ArtCultureSection';
import ClubsSection from '../Components/CampusLife/ClubsSection';
import NCCSection from '../Components/CampusLife/NCCSection';
import NSSSection from '../Components/CampusLife/NSSSection';
import OverviewSection from '../Components/CampusLife/OverviewSection';
import ResidentialSection from '../Components/CampusLife/ResidentialSection';
import LibrarySection from '../Components/CampusLife/LibrarySection';
import SportsSection from '../Components/CampusLife/SportsSection';
import TransportSection from '../Components/CampusLife/TransportSection';
import campusImg from '../assets/images/about/campus.JPG';
import hostelImg from '../assets/images/about/hostel.JPG';
import transportImg from '../assets/images/about/transport.JPG';
import campusLifeOne from '../assets/images/campus/1.JPG';
import campusLifeTwo from '../assets/images/campus/2.jpg';
import Library from '../assets/images/campus/3.JPG';
import campusLifeThree from '../assets/images/campus/sport.jpg';
import campusLifeFive from '../assets/images/campus/4.JPG';
import campusLifeFour from '../assets/images/campus/5.png';
import '../css/CampusLife.css';

const CampusLife = () => (
  <main>
    <Breadcrum title="Campus Life" />
    <OverviewSection image={campusLifeOne} />
    <ArtCultureSection image={campusLifeTwo} />
    <ResidentialSection image={hostelImg} />
    <LibrarySection image={Library} />
    <SportsSection image={campusLifeThree} />
    <NCCSection image={campusLifeFour} />
    <NSSSection image={campusLifeFive} />
    <TransportSection image={transportImg} />
    <ClubsSection image={campusImg} />
  </main>
);

export default CampusLife;
