import React, { useEffect } from "react";
import "../css/NCCCss.css";
import Breadcrum from "../Components/Common/Breadcrum";

import nccLogo from "../assets/images/ncc/1.webp";
import nccHero from "../assets/images/ncc/fire/2.webp";
import officerPhoto from "../assets/images/ncc/2.webp";
import unitRaisingImg from "../assets/images/ncc/3.webp";
import cadetImg from "../assets/images/ncc/4.webp";
import firingImg1 from "../assets/images/ncc/5.webp";
import firingImg2 from "../assets/images/ncc/6.webp";
import firingImg3 from "../assets/images/ncc/7.webp";
import ach1 from "../assets/images/ncc/fire/1.webp";
import ach2 from "../assets/images/ncc/fire/2.webp";
import ach3 from "../assets/images/ncc/fire/3.webp";
import firingTargetImg from "../assets/images/ncc/fire/1.webp";
import auditImg from "../assets/images/ncc/7.webp";

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

  const firingImages = [firingImg1, firingImg2, firingImg3, firingTargetImg];
  const achImages = [ach1, ach2, ach3];

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

      <NCCAims logo={nccLogo}/>
      <NCCDisciplineOfficer image={officerPhoto}/>
      <NCCRaisingUnit image={unitRaisingImg}/>
      <NCCStudentsList image={cadetImg}/>
      <NCCFiringPractice images={firingImages}/>
      <NCCAchievement acimages={achImages}/>
      <NCCPerformanceAudit/>
    </main>
  );
};

export default NationalCadetCorps;
