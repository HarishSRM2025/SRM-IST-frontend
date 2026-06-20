import React, { useEffect } from "react";
import "../css/NCCCss.css";
import Breadcrum from "../Components/Common/Breadcrum";

import nccLogo from "../assets/images/ncc/logo.webp";
import nccHero from "../assets/images/ncc/bg.webp";
import officerPhoto from "../assets/images/ncc/officer.webp";
import unitRaisingImg from "../assets/images/ncc/unit.webp";
import cadetImg from "../assets/images/ncc/cadet.webp";
import firingImg1 from "../assets/images/ncc/fire/1.webp";
import firingImg2 from "../assets/images/ncc/fire/2.webp";
import firingImg3 from "../assets/images/ncc/fire/3.webp";
import firingImg4 from "../assets/images/ncc/fire/4.webp";
import prec from "../assets/images/ncc/prec.webp";

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

  const firingImages = [firingImg1, firingImg2, firingImg3, firingImg4];

  return (
    <main className="ncc-page">
      <Breadcrum
        title="National Cadet Corps"
        bgImage={nccHero}
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
      <NCCAchievement />
      <NCCPerformanceAudit image={prec}/>
    </main>
  );
};

export default NationalCadetCorps;
