import React, { useEffect } from 'react';
import '../css/PlacementPage.css';
import Breadcrum from '../Components/Common/Breadcrum';
import IntroSection from '../Components/CatapultingCareers/IntroSection';
import FlowChart from '../Components/CatapultingCareers/FlowChart';
import Activities from '../Components/CatapultingCareers/Activities';
import Staff from '../Components/CatapultingCareers/Staff';
import CTA from '../Components/CatapultingCareers/CTA';
import CDCTeam from '../Components/CatapultingCareers/CDCTeam';
import ContactUs from '../Components/CatapultingCareers/ContactUs';

export default function CatapultingCareers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pl-page">
      <Breadcrum
        title="Catapulting Careers"
        paths={[
          { name: "Home", link: "/" },
          { name: "Placement", link: "/placement" },
          { name: "Catapulting Careers" }
        ]}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
      />
      <IntroSection />
      <FlowChart />
      <Activities/>
      <Staff/>
      <CDCTeam/>
      <ContactUs/>
      <CTA/>
    </div>
  );
}
