import React from "react";
import Breadcrum from "../Components/Common/Breadcrum";
import Overview from "../Components/Research/Overview";
import Mission from "../Components/Research/Mission";
import AcademicResearch from "../Components/Research/AcademicResearch";
import CenterOfResearch from "../Components/Research/CenterOfResearch";
import Mous from "../Components/Research/Mous";
import Policies from "../Components/Research/Policies";
import FundedResearch from "../Components/Research/FundedResearch";
import "../css/Department.css";

const Research = () => {
  return (
    <>
      <Breadcrum title="Research" />
      <Overview />
      <Mission />
      <AcademicResearch />
      <CenterOfResearch />
      <Policies />
      <FundedResearch />
      <Mous />
    </>
  );
};

export default Research;
