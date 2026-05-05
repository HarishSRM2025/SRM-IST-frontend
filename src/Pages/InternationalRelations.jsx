import React, { useEffect } from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import IROverview from '../Components/InternationalRelations/IROverview';
import IRHead from '../Components/InternationalRelations/IRHead';
import IRLogos from '../Components/InternationalRelations/IRLogos';
import IRExpertTalks from '../Components/InternationalRelations/IRExpertTalks';

const InternationalRelations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#fff', paddingBottom: '60px' }}>
      <Breadcrum title="International Affairs" />
      <IROverview />
      <IRHead />
      <IRLogos />
      <IRExpertTalks />
    </div>
  );
};

export default InternationalRelations;
