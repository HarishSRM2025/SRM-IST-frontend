import React, { useEffect } from "react";
import "../css/NCCCss.css";
import Breadcrum from "../Components/Common/Breadcrum";

// import nccHero from "../assets/images/ncc/ncc-leadership-camp.webp";
// import nccLogo from "../assets/images/ncc/ncc-logo.png";
// import officerPhoto from "../assets/images/ncc/officer-arunkumar.jpg";
// import unitRaisingImg from "../assets/images/ncc/ncc-unit-raising.jpg";
// import cadetImg from "../assets/images/ncc/ncc-firing-cadet.jpg";
// import firingImg1 from "../assets/images/ncc/firing-practice-1.jpg";
// import firingImg2 from "../assets/images/ncc/firing-practice-2.jpg";
// import firingImg3 from "../assets/images/ncc/firing-practice-3.jpg";
// import firingTargetImg from "../assets/images/ncc/firing-practice-target.jpg";
// import auditImg from "../assets/images/ncc/performance-audit-1.jpg";

import NCCAims from "../Components/NCC/NCCAims";
import NCCDisciplineOfficer from "../Components/NCC/NCCDisciplineOfficer";
import NCCRaisingUnit from "../Components/NCC/NCCRaisingUnit";
import NCCStudentsList from "../Components/NCC/NCCStudentsList";
import NCCFiringPractice from "../Components/NCC/NCCFiringPractice";
import NCCPerformanceAudit from "../Components/NCC/NCCPerformanceAudit";
import NCCAchievement from "../Components/NCC/NCCAchievement";

const NationalCadetCorps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const firingImages = [firingImg1, firingImg2, firingImg3, firingTargetImg];

  return (
    <main className="ncc-page">
      <Breadcrum
        title="National Cadet Corps"
        subtitle="Unity and Discipline"
        paths={[
          { name: "Home", link: "/" },
          { name: "Campus Life", link: "/campus-life" },
          { name: "National Cadet Corps" },
        ]}
      />

      <NCCAims/>
      <NCCDisciplineOfficer/>
      <NCCRaisingUnit/>
      <NCCStudentsList/>
      <NCCFiringPractice/>
      <NCCAchievement/>
      <NCCPerformanceAudit/>
    </main>
  );
};

export default NationalCadetCorps;
