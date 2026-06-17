import React from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import ArtCultureSection from '../Components/CampusLife/ArtCultureSection';
import ClubsSection from '../Components/CampusLife/ClubsSection';
import LibrarySection from '../Components/CampusLife/LibrarySection';
import NCCSection from '../Components/CampusLife/NCCSection';
import NSSSection from '../Components/CampusLife/NSSSection';
import OverviewSection from '../Components/CampusLife/OverviewSection';
import ResidentialSection from '../Components/CampusLife/ResidentialSection';
import SportsSection from '../Components/CampusLife/SportsSection';
import TransportSection from '../Components/CampusLife/TransportSection';
import campusImg from '../assets/images/about/campus.JPG';
import hostelImg from '../assets/images/about/hostel.JPG';
import transportImg from '../assets/images/about/transport.JPG';
import campusLifeOne from '../assets/images/home/campuslife/1.JPG';
import campusLifeTwo from '../assets/images/home/campuslife/2.jpg';
import campusLifeThree from '../assets/images/home/campuslife/3.jpg';
import campusLifeFour from '../assets/images/home/campuslife/4.jpg';
import campusLifeFive from '../assets/images/home/campuslife/5.jpg';
import '../css/CampusLife.css';

const CampusLife = () => (
  <main>
    <Breadcrum title="Campus Life" />
    <OverviewSection image={campusImg} />
    <ArtCultureSection image={campusLifeOne} />
    <SportsSection image={campusLifeTwo} />
    <LibrarySection image={campusLifeThree} />
    <TransportSection image={transportImg} />
    <NCCSection image={campusLifeFour} />
    <NSSSection image={campusLifeFive} />
    <ClubsSection image={campusImg} />
    <ResidentialSection image={hostelImg} />
  </main>
);

export default CampusLife;
