import React from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import DeanMessage from '../Components/Institution/DeanMessage';
import VisionMission from '../Components/Institution/VisionMission';
import Stats from '../Components/Institution/Stats';
import Departments from '../Components/Institution/Departments';

import '../css/Department.css'; // For common widgets and cards

const Institution = () => {
  return (
    <div className="institution-page">
      <Breadcrum 
        title="Institution Overview"
        paths={[{ name: 'Home', link: '/' }, { name: 'Institution' }]}
        bgImage="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1920&auto=format&fit=crop"
      />

      <DeanMessage />
      <VisionMission />
      <Stats />
      <Departments />
    </div>
  );
};

export default Institution;
