import React from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import Accommodation from '../Components/CampusLife/Accommodation';
import ArtAndCulture from '../Components/CampusLife/ArtAndCulture';
import CentralLibrary from '../Components/CampusLife/CentralLibrary';
import Transport from '../Components/CampusLife/Transport';

const CampusLife = () => {
  return (
    <>
      <Breadcrum title="Campus Life" />
      <Accommodation />
      <ArtAndCulture />
      <CentralLibrary />
      <Transport />
    </>
  );
};

export default CampusLife;
