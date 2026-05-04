import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrum from '../Components/Common/Breadcrum';
import DeanMessage from '../Components/Institution/DeanMessage';
import VisionMission from '../Components/Institution/VisionMission';
import Stats from '../Components/Institution/Stats';
import Departments from '../Components/Institution/Departments';

import '../css/Department.css'; // For common widgets and cards
import InstituteFacilities from '../Components/Institution/InstituteFacilities';
import InstituteGallery from '../Components/Institution/InstituteGallery';

const Institution = () => {
  const location = useLocation();
  const instName = location.state?.instName || "Institution Overview";

  return (
    <div className="institution-page">
      <Breadcrum 
        title={instName}
        paths={[{ name: 'Home', link: '/' }, { name: instName === "Institution Overview" ? "Institution" : instName }]}
        bgImage="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1920&auto=format&fit=crop"
      />

      <DeanMessage />
      <VisionMission />
      <Stats />
      <Departments />
      <InstituteFacilities/>
      <InstituteGallery/>
    </div>
  );
};

export default Institution;
